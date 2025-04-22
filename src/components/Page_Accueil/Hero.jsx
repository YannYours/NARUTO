import heroImage from "../../medias/naruto_and_sasuke.png";
export default function Hero1() {
    return (
        <>
            <section className="hero" id="accueil" style={{ marginTop: 100 }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-6 text-white fade-in">
                            <h1 className="fw-bold">BIENVENUE DANS LE MONDE DES NINJAS</h1>
                            <h2 className="lead">
                                Découvre les héros légendaires de Naruto & Boruto, leurs techniques et leurs histoires.
                            </h2>
                            <p>
                                Plonge dans les histoires épiques des ninjas de Konoha, découvre leurs clans,
                                techniques secrètes et parcours inoubliables. De Naruto à Itachi, vis l'aventure
                                comme jamais auparavant.
                            </p>
                        </div>
                        <div className="col-md-6 text-center">
                            <img
                                src={heroImage}
                                alt="Naruto et Sasuke"
                                className="img-fluid ban-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )

}