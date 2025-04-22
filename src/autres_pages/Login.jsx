import { useState } from "react"
import api from "../api/axios"

export default function Login() {

    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [message, setMessage] = useState(" ")

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const res = await api.post('/logIn', { email, password })

            const data = res.data
            setMessage(`Bienvenue ${data.nom_complet}`)

        } catch (err) {
            if (err.response) {
                setMessage(err.response.data?.message || "Erreur serveur")
            } else if (err.request) {
                setMessage("Le serveur ne répond pas")
            } else {
                setMessage("Erreur inconnue")
            }
        }


    }


    return (
        <div className="container d-flex align-items-center justify-content-center">
            <form
                className="form"
                id="loginForm"
                method="post"
                onSubmit={handleSubmit}
            >
                <p className="title">Formulaire de connexion</p>
                <p className="message">Connectez-vous à votre compte.</p>

                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fas fa-phone" /></span>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="Entrez votre adresse mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fas fa-lock" /></span>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="Entrez votre mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="d-flex align-items-center justify-content-center">
                    <button type="submit" className="btn btn-primary">Connexion</button>
                    <a href="/inscription">Vous n'avez pas de compte ?</a>
                </div>

                {message && <p className="mt-3 text-center text-danger">{message}</p>}
            </form>
        </div>
    )
}