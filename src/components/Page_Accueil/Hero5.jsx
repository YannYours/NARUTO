import kunai from "../../medias/kunai.gif";

export default function Hero5() {
    return (
        <>
            <section className="hero5 position-relative" style={{ height: '34rem' }} >
                <div className="container">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="col-lg-12 hero-content">
                            <h2 className="section-title">Clans</h2>
                            <p className="hero-description">
                                Dans le monde de Naruto, un ninja n'est jamais seul. Derrière chaque héros se cache un héritage, un nom, un clan.
                                Les clans sont bien plus que des familles. Ce sont des lignées de guerriers, de stratèges ou de sages, chacune porteuse de traditions, de techniques secrètes et de rivalités ancestrales.
                                Du regard perçant des Uchiha au Byakugan du clan Hyuga, en passant par les ombres du clan Nara ou la force brute des Akimichi, chaque clan a façonné l’histoire du village de Konoha et au-delà.
                                Découvre les origines, les pouvoirs héréditaires, et les membres les plus emblématiques de ces clans qui ont marqué la légende shinobi.
                            </p>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="hero-cta">
                                    <a href="#clans" className="btn btn-cta">
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