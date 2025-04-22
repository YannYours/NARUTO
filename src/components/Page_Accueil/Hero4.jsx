import kunai from "../../medias/kunai.gif";

export default function Hero4() {
    return (
        <>
            <section className="hero4 position-relative" style={{ height: '34rem' }} >
                <div className="container">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="col-lg-12 hero-content">
                            <h2 className="section-title">Grandes Batailles / Arcs</h2>
                            <p className="hero-description">
                                Chaque génération de ninjas a été forgée dans le feu du conflit. Des épreuves initiatiques aux guerres dévastatrices, l’univers de Naruto est rythmé par des arcs épiques qui ont changé le destin de nombreux personnages.
                                Revivez les moments les plus marquants de la saga : l’examen Chûnin où tout a commencé, l’assaut de Pain sur Konoha, ou encore la Quatrième Grande Guerre Ninja qui a bouleversé le monde shinobi.
                                Explore ces événements clés à travers une chronologie vivante. Chaque arc t’ouvre la porte vers les héros, les antagonistes, et les choix décisifs qui les ont façonnés.
                            </p>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="hero-cta">
                                    <a href="/batailles" className="btn btn-cta">
                                        <img src={kunai} width={80} height={60} className="me-2" alt="Kunai" />
                                        <span>Commencer l'exploration</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}