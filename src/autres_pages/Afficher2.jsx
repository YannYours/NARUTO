import { useState, useEffect } from "react";
import axios from "axios";

export default function Affiche2() {
    const [ninjas, setNinjas] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        async function ImportNinja() {
            try {
                const res = await axios.get("https://dattebayo-api.onrender.com/characters/?limit=10");
                const basicList = res.data.characters;
                setNinjas(basicList);
            } catch (err) {
                console.error("Erreur de récupération :", err.message);
                setMessage("Impossible de récupérer les ninjas.");
            }
        }

        ImportNinja();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Liste des 3 premiers Ninjas</h2>

            {message && <p className="text-danger">{message}</p>}

            <ul className="list-group">
                {ninjas.map((ninja) => (
                    <li key={ninja.id} className="list-group-item">
                        <div className="d-flex align-items-center">
                            <img src={ninja.images[0]} alt={ninja.name} width="60" className="me-3" />
                            <strong>{ninja.name}</strong>
                        </div>
                        <p className="mt-2 mb-1"><strong>Début Manga :</strong> {ninja.debut.manga}</p>
                        <p><strong>Père :</strong> {ninja.family?.father || "Inconnu"}</p>

                        <p><strong>Quelques Jutsus :</strong></p>
                        <ul>
                            {ninja.jutsu.slice(0, 5).map((jutsu, index) => (
                                <li key={`${ninja.id}-jutsu-${index}`}>{jutsu}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}
