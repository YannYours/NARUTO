import { LeftChapter } from "../components/Pages_Grandes_Battailles/Chapters"
import { RightChapter } from "../components/Pages_Grandes_Battailles/Chapters"
import { Presentation } from "../components/Presentation"
import Header from "../components/Page_Accueil/Header"
import kunai_chapter from "../medias/kunai-chapter.png"
import assaut_pain from "../medias/assaut-pain.jpg"
import examen_chunin from "../medias/examen-chunin.jpg"
import invasion_konoha from "../medias/invasion-konoha.jpg"
import pays_vagues from "../medias/pays-des-vagues.png"
import poursuite_itachi from "../medias/poursuite-itachi.webp"
import recherche_tsunade from "../medias/recherche-tsunade.jpg"
import recuperation_sasuke from "../medias/recuperation-sasuke.png"
import rencontre_sasuke from "../medias/rencontre-sasuke.jpg"
import sauvetage_kazekage from "../medias/sauvetage-kazekage.jpg"
import suppression_akatsuki from "../medias/suppression-akatsuki.png"
import combat_final from "../medias/combat-final.jpg"
import attaque_kaguya from "../medias/attaque-kaguya.png"
import obito_jinchuriki from "../medias/obito-jinjuriki.jpg"
import sommet_kage from "../medias/sommet-kage.jpg"
import guerre_ninja from "../medias/guerre-ninja.png"

export default function Battailles() {
    return (
        <>
            <Header />
            <Presentation title={"Grandes batailles / Arcs"}
                description={`L’histoire du monde ninja n’est pas un long fleuve tranquille.
            Elle est faite de conflits, de trahisons, de sacrifices… mais aussi de courage, d’alliances et d’espoir.
            Chaque arc de Naruto est une étape majeure dans l’évolution des personnages, un momentcharnière où 
            les décisions prises changent à jamais le destin de villages
            entiers. Ces événements, parfois tragiques, parfois héroïques, forment une
            toile épique qui a captivé des millions de fans à travers le monde. Que ce
            soit l’examen Chûnin où tout commence, l’attaque de Pain sur Konoha, ou encore
            la Quatrième Grande Guerre Ninja, chaque bataille raconte bien plus qu’un simple
            affrontement : elle révèle les motivations, les failles, les idéaux et la volonté
            de chaque ninja impliqué. Dans cette section, tu découvriras les arcs narratifs
            majeurs de la saga Naruto. Pour chacun, une ligne du temps, un résumé clair, un
            visuel fort, et bien sûr, les personnages clés qui ont marqué ces épisodes inoubliables.`}
            />
            <div className="container">
                <div
                    className="row align-items-center justify-content-center text-center"
                    style={{ marginTop: '8rem' }}
                >
                    <div className="col-auto kunai-container">
                        <img
                            src={kunai_chapter}
                            className="img-fluid kunai-img-chapter"
                            alt="Kunai chapitre"
                        />
                    </div>
                    <div className="col-auto">
                        <h2 className="section-chapter-title">
                            Partie 1 : Naruto (Épisodes 1 à 220)
                        </h2>
                    </div>
                </div>
            </div>

            <RightChapter
                ChapterImg={pays_vagues}
                ChapterTitle={"1. Arc du Pays des Vagues (Épisodes 1–19)"}
                ChapterResume={"Résumé : Première mission sérieuse de l'équipe 7 (Naruto, Sasuke, Sakura, Kakashi) pour protéger un constructeur de pont. Ils affrontent Zabuza Momochi et Haku, découvrant la dure réalité du monde ninja."}
                ChapterMainCharacters={"Personnages clés : Naruto, Sasuke, Sakura, Kakashi, Zabuza, Haku"}
            />
            <LeftChapter
                ChapterImg={examen_chunin}
                ChapterTitle={"2. Arc des Examens Chûnin (Épisodes 20–67)"}
                ChapterResume={"Résumé : Examens pour devenir Chûnin, introduisant de nombreux nouveaux personnages et premières confrontations sérieuses. L'arc se divise en plusieurs épreuves, dont la Forêt de la Mort et les combats en un contre un."}
                ChapterMainCharacters={"Personnages clés : Naruto, Sasuke, Sakura, Rock Lee, Gaara, Orochimaru"}
            />
            <RightChapter
                ChapterImg={invasion_konoha}
                ChapterTitle={"3. Arc de l'Invasion de Konoha (Épisodes 68–80)"}
                ChapterResume={"Résumé :  Attaque de Konoha par Orochimaru et le Village de Suna pendant les examens Chûnin. Le Troisième Hokage affronte Orochimaru dans un combat décisif."}
                ChapterMainCharacters={"Personnages clés : Orochimaru, Hiruzen Sarutobi (3e Hokage), Jiraiya, Tsunade"}
            />
            <LeftChapter
                ChapterImg={recherche_tsunade}
                ChapterTitle={"4.Arc de la Recherche de Tsunade (Épisodes 81–100)"}
                ChapterResume={"Résumé : Jiraiya et Naruto partent à la recherche de Tsunade pour qu'elle devienne le 5e Hokage. Naruto apprend le Rasengan pendant ce voyage."}
                ChapterMainCharacters={"Personnages clés : Naruto, Jiraiya, Tsunade, Orochimaru"}
            />
            <RightChapter
                ChapterImg={recuperation_sasuke}
                ChapterTitle={"5. Arc de la Mission de Récupération de Sasuke (Épisodes 107–135)"}
                ChapterResume={"Résumé : Sasuke quitte Konoha pour rejoindre Orochimaru ; Naruto et ses amis tentent de le ramener. Les combats contre les membres du Son sont intenses."}
                ChapterMainCharacters={"Personnages clés : Naruto, Sasuke, Shikamaru, Neji, Choji, Kiba, Kimimaro"}
            />

            <div className="container">
                <div
                    className="row align-items-center justify-content-center text-center"
                    style={{ marginTop: '8rem' }}
                >
                    <div className="col-auto kunai-container">
                        <img
                            src={kunai_chapter}
                            className="img-fluid kunai-img-chapter"
                            alt="Kunai chapitre"
                        />
                    </div>
                    <div className="col-auto">
                        <h2 className="section-chapter-title">
                            Partie 2 : Naruto Shippuden (Épisodes 1 à 500)
                        </h2>
                    </div>
                </div>
            </div>

            <RightChapter
                ChapterImg={sauvetage_kazekage}
                ChapterTitle={"6. Arc de la Mission de Sauvetage du Kazekage (Épisodes 1–32)"}
                ChapterResume={"Résumé : Gaara, devenu Kazekage, est enlevé par l'Akatsuki ; Naruto et ses amis partent le sauver. Sakura affronte Sasori dans un combat mémorable."}
                ChapterMainCharacters={"Personnages clés : Naruto, Gaara, Sakura, Kakashi, Deidara, Sasori​"}
            />
            <LeftChapter
                ChapterImg={rencontre_sasuke}
                ChapterTitle={"7. Arc de la Rencontre avec Sasuke (Épisodes 33–53)"}
                ChapterResume={"Résumé : Nouvelle équipe 7 avec Sai et Yamato part à la recherche de Sasuke. Ils découvrent l'étendue de la puissance de Sasuke."}
                ChapterMainCharacters={"Personnages clés : Naruto, Sakura, Sai, Yamato, Sasuke, Orochimaru​​"}
            />
            <RightChapter
                ChapterImg={suppression_akatsuki}
                ChapterTitle={"8. Arc de la Suppression de l'Akatsuki (Épisodes 72–88)"}
                ChapterResume={"Résumé : Confrontation avec les membres de l'Akatsuki, notamment Hidan et Kakuzu. Shikamaru prend une décision lourde de conséquences."}
                ChapterMainCharacters={"Personnages clés : Naruto, Kakashi, Shikamaru, Hidan, Kakuzu​​​"}
            />
            <LeftChapter
                ChapterImg={poursuite_itachi}
                ChapterTitle={"9. Arc de la Poursuite d'Itachi (Épisodes 113–143)"}
                ChapterResume={"Résumé : Sasuke cherche à affronter son frère Itachi pour venger son clan. La vérité sur Itachi est révélée après leur combat."}
                ChapterMainCharacters={"Personnages clés : Sasuke, Itachi, Kisame, Tobi​​"}
            />
            <RightChapter
                ChapterImg={assaut_pain}
                ChapterTitle={"10. Arc de l'Assaut de Pain (Épisodes 152–175)"}
                ChapterResume={"Résumé : Pain attaque Konoha, causant de lourdes pertes ; Naruto revient pour le confronter. Il maîtrise le mode ermite et affronte Pain dans un combat épique."}
                ChapterMainCharacters={"Personnages clés : Naruto, Pain (Nagato), Hinata, Kakashi​​​"}
            />
            <LeftChapter
                ChapterImg={sommet_kage}
                ChapterTitle={"11. Arc du Sommet des Cinq Kage (Épisodes 197–214)"}
                ChapterResume={"Résumé : Réunion des cinq Kage pour discuter de la menace de l'Akatsuki ; Sasuke attaque le sommet."}
                ChapterMainCharacters={"Personnages clés : Sasuke, Naruto, les cinq Kage, Tobi​"}
            />
            <RightChapter
                ChapterImg={guerre_ninja}
                ChapterTitle={"12. Arc de la Quatrième Grande Guerre Ninja (Épisodes 261–375)"}
                ChapterResume={"Résumé : Début de la guerre entre l'Alliance Shinobi et l'Akatsuki, avec de nombreuses batailles."}
                ChapterMainCharacters={"Personnages clés : Naruto, Sasuke, Kabuto, Madara, Obito, les cinq Kage​"}
            />
            <LeftChapter
                ChapterImg={obito_jinchuriki}
                ChapterTitle={"13. Arc de la Naissance du Jinchûriki de Jûbi (Épisodes 378–388, 391–393, 414–421, 424–431)"}
                ChapterResume={"Résumé : Obito devient le Jinchûriki de Jûbi, menaçant le monde entier."}
                ChapterMainCharacters={"Personnages clés : Obito, Naruto, Sasuke, Kakashi​​"}
            />
            <RightChapter
                ChapterImg={attaque_kaguya}
                ChapterTitle={"14. Arc de l'Attaque de Kaguya (Épisodes 451–479)"}
                ChapterResume={"Résumé : Kaguya, l'ancêtre des ninjas, est ressuscitée ; Naruto et Sasuke l'affrontent."}
                ChapterMainCharacters={"Personnages clés : Naruto, Sasuke, Sakura, Kakashi, Kaguya, Obito​​"}
            />

            <LeftChapter
                ChapterImg={combat_final}
                ChapterTitle={"15. Arc de la Bataille Finale (Épisodes 476–479)"}
                ChapterResume={"Résumé : Dernier affrontement entre Naruto et Sasuke pour déterminer l'avenir du monde ninja."}
                ChapterMainCharacters={"Personnages clés : Naruto, Sasuke​"}
            />

            <section className="bgrd position-relative">
            </section>

            <footer
                style={{
                    backgroundColor: "#333",
                    color: "#fff",
                    textAlign: "center",
                    padding: "20px 0",
                }}
            >
                <p style={{ margin: 0, fontSize: 14 }}>
                    © 2025 Assoué Yann Florian. All rights reserved.
                </p>
            </footer>
        </>
    );
}
