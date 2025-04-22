import logo from "../../medias/logo.png";
import { useState, useEffect } from "react";

export default function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);

        const animatedElements = document.querySelectorAll(".fade-in");
        animatedElements.forEach((el) => {
            el.classList.add("show");
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled])

    return (
        <header>
            <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img
                            src={logo}
                            alt="Logo Naruto"
                            id="navbar-logo"
                            loading="lazy"
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="hamburger">
                            <span className="hamburger-line" />
                            <span className="hamburger-line" />
                            <span className="hamburger-line" />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="/personnages">Personnages</a></li>
                            <li className="nav-item"><a className="nav-link" href="/batailles">Grandes batailles/Arcs</a></li>
                            <li className="nav-item"><a className="nav-link" href="#clans">Clans</a></li>
                            <li className="nav-item"><a className="nav-link" href="#apropos">à propos</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}