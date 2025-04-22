import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import nodemailer from 'nodemailer'
import randomstring from 'randomstring'
import mysql from 'mysql2'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
//import bcrypt from 'bcrypt'


const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression())
app.use(cookieParser());
app.use(express.json());
app.use(express.json())

const transporter = nodemailer.createTransport({
    host: 'max1.ngomory.ci',
    port: 587,
    secure: false,
    auth: {
        user: 'smtp-dev@talentium.info',
        pass: 'TDBuIodzvNpQ'
    }
})
const config = { host: 'localhost', user: 'root', password: 'rootyann@12345', database: 'bd_taskmaster' };
const pool = mysql.createPool({
    connectionLimit: 20,
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    connectTimeout: 30000,
    waitForConnections: true
});
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
    } else {
        console.log('Connexion à la base de données établie avec succès.');
        connection.release();
    }
});

function handleQuery(query, params, callback) {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log('Erreur lors de l\'acquisition de la connexion:', err);
            return callback(err);
        }
        connection.query(query, params, (error, results) => {
            connection.release();

            if (error) {
                if (error.code === 'PROTOCOL_CONNECTION_LOST') {
                    console.log('Connexion perdue, tentative de reconnexion...');
                    handleDisconnect();
                    return callback(error);
                } else {
                    console.log('Erreur lors de l\'exécution de la requête:', error);
                    return callback(error);
                }
            }

            return callback(null, results);
        });
    });
}

function handleDisconnect() {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log('Erreur lors de l\'acquisition de la connexion:', err);
            setTimeout(handleDisconnect, 2000);
        } else {
            connection.release();
        }
    });
}

process.on('SIGINT', () => {
    pool.end(err => {
        if (err) {
            console.error('Erreur lors de la fermeture du pool:', err);
        } else {
            console.log('Pool de connexions fermé.');
        }
        process.exit();
    });
});
const saltStatique = 'b7dK8P9qL3wX6z1tF2nV4yR5sJ9eU0fM'

/*const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (err) {
        console.error('Erreur lors du hachage du mot de passe:', err);
        throw err;
    }
};*/
const secret = 'mBu61lKPDdgRrS4gACKy0rXeOat5FhM5oal5cwMgXC2KiQXSx51jQsaJPo1677AS'

app.post('/logIn', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Tous les champs sont requis" })
    }

    const CheckMail = `SELECT fullname AS nom_complet, password AS mot_passe from user WHERE email_id = ? `
    handleQuery(CheckMail, [email], async (err, results) => {
        if (err) {
            console.error('Erreur SQL :', err.message)
            return res.status(500).json({ success: false, message: `Erreur serveur : ${err.message}` })
        }

        if (results.length === 0) {
            console.log("Aucun utilisateur trouvé")
            return res.status(400).json({ success: false, message: "Aucun utilisateur trouvé" })
        }

        const utilisateur = results[0]
        return res.json({
            success: true,
            nom_complet: utilisateur.nom_complet
        })
    })
})
app.post('/registering', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Tous les champs sont requis',
            error: 'Tous les champs sont requis'
        });
    }

    const CheckUserExist = 'SELECT * FROM user WHERE email_id = ?';

    handleQuery(CheckUserExist, [email], async (err, results) => {
        if (err) {
            console.error("Erreur lors de la vérif de l'utilisateur", err.message);
            return res.status(500).json({ success: false, message: `Erreur lors de la vérif de l'utilisateur: ${err.message}` });
        }

        if (results.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Cet utilisateur existe déjà`,
                error: 'Utilisateur existant'
            });
        }

        const ConfirmationCode = randomstring.generate({
            length: 4,
            charset: 'numeric'
        });

        const mailOptions = {
            from: 'smtp-dev@talentium.info',
            to: email,
            subject: 'TaskMaster - Code de confirmation',
            text: `Le code de confirmation pour votre compte est : ${ConfirmationCode}`
        };

        crypto.pbkdf2(password, saltStatique, 10000, 64, 'sha512', (err, derivedKey) => {
            if (err) {
                console.error('Erreur de hachage :', err);
                return res.status(500).json({ success: false, message: 'Erreur lors du hachage du mot de passe.' });
            }

            const hashedPassword = derivedKey.toString('hex');
            const expirationTime = Math.floor(Date.now() / 1000) + 3600;
            const token = jwt.sign({
                email,
                name,
                password: hashedPassword,
                ConfirmationCode,
                saltStatique
            }, secret, { expiresIn: expirationTime });

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Erreur lors de l\'envoi du code de confirmation : ', error);
                    return res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi du mail.' });
                } else {
                    console.log('Code de confirmation envoyé : ', ConfirmationCode);
                    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
                    res.status(200).json({ success: true, message: 'Pré-inscription réussie', redirect: '/confirm_registering' });
                }
            });
        });
    });
});

app.post('/confirm_registering', (req, res) => {
    try {
        const { confirmationCodeUser } = req.body;
        const token = req.cookies.token;

        if (!token) {
            return res.status(200).json({
                success: false,
                message: 'Aucun token fourni',
                error: 'Le token JWT est requis pour cette opération'
            });
        }

        const decoded = jwt.verify(token, secret);
        const { email, name, password, ConfirmationCode } = decoded;

        if (confirmationCodeUser !== ConfirmationCode) {
            return res.status(200).json({
                success: false,
                message: 'Code de confirmation invalide, réessayez',
                error: 'Le code fourni ne correspond pas à celui du JWT'
            });
        }
        const query = 'INSERT INTO user (email_id, fullname, password ) VALUES (?, ?, ?)'

        const values = [email, name, password];
        handleQuery(query, values, (err, results) => {
            if (err) {
                console.error('Erreur lors de la création de l\'utilisateur : ', err.message);
                return res.status(500).json({
                    success: false,
                    message: 'Erreur lors de la création de l\'utilisateur. Veuillez réessayer plus tard.',
                    error: err.message
                });
            } else {
                res.clearCookie('token');
                return res.status(200).json({
                    success: true,
                    message: 'Inscription confirmée avec succès',
                });
            }

        });
    } catch (error) {
        console.error('Erreur lors de la confirmation du compte : ', error.message);
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la confirmation du compte',
            error: error.message
        });
    }

});



app.listen(3000, () => {
    console.log('Serveur backend démarré sur le port 3000')
})