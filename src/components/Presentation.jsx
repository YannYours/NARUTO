
export function Presentation( {title, description} ) {
    return (
        <section className="battle-presentation position-relative">
            <h2 className="section-title" style={{ marginTop: '10rem' }}>{title}</h2>
            <div className="container align-items-center justify-content-center">
                <p className="hero-description">
                    {description}
                </p>
            </div>
        </section>
    )
}