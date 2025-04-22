import React from "react";
import Header from "../components/Page_Accueil/Header";
import Hero1 from "../components/Page_Accueil/Hero";
import Hero2 from "../components/Page_Accueil/Hero2";
import Hero3 from "../components/Page_Accueil/Hero3";
import Hero4 from "../components/Page_Accueil/Hero4";
import Hero5 from "../components/Page_Accueil/Hero5";
import HeroAuthor from "../components/Page_Accueil/HeroAuthor";

export default function Accueil() {
    return (
        <>
            <main>
                <Header />
                <Hero1 />
                <Hero2 />
                <Hero3 />
                <Hero4 />
                <Hero5 />
                <HeroAuthor />
            </main>
        </>
    );
}