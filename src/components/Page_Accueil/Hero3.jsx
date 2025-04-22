import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import kunai from "../../medias/kunai.gif";


export default function Hero3() {

    const [loading, setLoading] = useState(true);
    const [ninjas, setNinjas] = useState([]);
    const [message, setMessage] = useState("")

    useEffect(() => {
        async function ImportNinja() {
            try {
                const res = await axios.get("https://dattebayo-api.onrender.com/characters/?limit=20");
                const basicList = res.data.characters;
                setNinjas(basicList);
                setLoading(false);
            } catch (err) {
                console.error("Erreur de récupération :", err.message);
                setMessage("Impossible de récupérer les ninjas.");
                setLoading(false);
            }
        }

        ImportNinja();
    }, []);




    return (
        <section className="personnages-section position-relative py-5" id="personnages">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12 text-center fade-in">
                        <h2 className="section-title">Personnages</h2>
                        <p className="section-subtitle">Découvre quelques personnages emblématiques de l'univers Naruto</p>
                    </div>
                </div>

                <div className="row fade-in">
                    <div className="col-12">
                        {loading ? (
                            <div className="text-center py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Chargement...</span>
                                </div>
                            </div>
                        ) : (
                            <div className="d-flex overflow-auto gap-3">
                                {ninjas.length > 0 ? (
                                    ninjas.map((ninja) => (
                                        <motion.div
                                            key={ninja.id}
                                            className="card ninja-card fade-in"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <img
                                                src={ninja.images && ninja.images[0] ? ninja.images[0] : ""}
                                                alt={ninja.name}
                                                className="card-img-top ninja-img"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{ninja.name}</h5>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <p className="text-center w-100 py-4">{message || "Aucun personnage trouvé."}</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="hero-cta">
                        <a href="/personnages" className="btn btn-cta3">
                            <img src={kunai} width={80} height={60} className="me-2" alt="Kunai" />
                            <span>Voir plus</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}