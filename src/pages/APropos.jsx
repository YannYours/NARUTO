import Header from "../components/Page_Accueil/Header";
import { Presentation } from "../components/Presentation";

export default function APropos() {
    return (
        <>
            <Header />
            <Presentation
                title={"À propos : la volonté d’un ninja derrière chaque pixel"}
                description={`Avant même de maîtriser les lignes de code, je dévorais les tomes de Naruto à la lueur d’un vieil écran d’ordinateur. Chaque page m’apprenait qu’un rêve – devenir Hokage, bâtir un site ou lancer une vidéo virale – se nourrit d’obstination, d’amitié et d’un grain de folie créative.

Au fil des arcs, les valeurs de la série se sont glissées dans mon quotidien :

Nindō : “Je ne reviens jamais sur ma parole.”
Comme Naruto, je pose cette promesse sur chaque projet : livrer un travail honnête, fini et fidèle à l’idée d’origine, même quand le chemin ressemble à la Vallée de la Fin.

Volonté du Feu.
Derrière mes montages vidéo et mes lignes de JavaScript se cache la même flamme : transmettre de l’énergie positive et inspirer les autres à croire en leur potentiel, que l’on soit rappeur débutant ou entrepreneur en herbe.

Esprit d’équipe.
Personne ne devient Hokage seul ; j’avance entouré de clients, partenaires et mentors, façon Équipe 7. Vos feedbacks sont mes kunai : ils affinent la précision de chaque détail.

Créativité des Jutsu.
Cloner une idée, la transformer avec un Rasengan de design, filer un coup de main à l’UX d’un coup de Shuriken CSS… Chaque fonctionnalité est un jutsu custom — spectaculaire mais toujours utile.

En parcourant ce site, vous traversez mon propre Village Caché : un endroit où coder rime avec raconter des histoires, et où chaque projet est un épisode de plus dans la quête d’une liberté créative totale.

Si vous partagez cette passion — ou si vous voulez simplement qu’un ninja numérique propulse vos idées — entrons en mission ensemble !`}
            />
        </>
    );
}
