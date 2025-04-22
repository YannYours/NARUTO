import ninja from "../../medias/ninja.jpg";

export default function Hero2() {
    return (
        <section className="hero2 position-relative" style={{marginTop : '8rem'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 ban2-container fade-in">
                        <div className="ban2-mockup">
                            <img src={ninja} className="img-fluid" alt="Akatsuki" />
                        </div>
                    </div>
                    <div className="col-lg-6 hero-content fade-in delay-1">
                        <h2 className="section-title">Un guide complet sur les personnages emblématiques de Naruto</h2>
                        <p className="hero-description">
                            Tu es fan de Naruto ou curieux de découvrir l'univers ninja qui a marqué des générations ?
                            Ce site te propose une présentation détaillée des personnages, clans, techniques et histoires
                            qui composent cette saga culte. Que tu sois débutant ou passionné, tu trouveras ici toutes
                            les infos pour mieux comprendre et apprécier chaque ninja.

                            Depuis le monde des cinq grandes nations shinobis jusqu'aux combats épiques des ninjas légendaires,
                            Naruto est un récit de rivalité, d'héritage, et de volonté de feu.
                            Chaque personnage, du plus discret au plus puissant, a une histoire à raconter.
                            Prêt à explorer ce monde ? Alors suis-moi...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}