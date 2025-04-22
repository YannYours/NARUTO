import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";

export default function Inscription() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await api.post("/registering", {
                name,
                email,
                password,
            });

            const data = res.data;
            if (data.success) {
                setMessage("Pré-inscription réussie. Vérifiez votre email !");
                navigate("/confirm_registering");
            } else {
                setMessage(data.message || "Une erreur est survenue.");
            }
        } catch (err) {
            if (err.response) {
                setMessage(err.response.data.message || "Erreur du serveur.");
            } else if (err.request) {
                setMessage("Aucune réponse du serveur. Vérifiez votre connexion.");
            } else {
                setMessage("Erreur inconnue : " + err.message);
            }
            console.error(err);
        }
    }


    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group col-md-6">
                    <label htmlFor="name">
                        <i className="fas fa-user" /> Nom Complet
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Entrez votre nom complet"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="email">
                        <i className="fas fa-envelope" /> Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Entrez votre email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group col-md-4">
                    <label htmlFor="password">
                        <i className="fas fa-lock" /> Mot de passe
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="Minimum 6 caractères"
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group text-center">
                    <button type="submit" className="nav_bar_button">
                        <i className="fas fa-check" /> S'inscrire
                    </button>
                </div>
            </form>

            {message && (
                <div className="alert alert-info text-center mt-3">{message}</div>
            )}
        </>
    );
}
