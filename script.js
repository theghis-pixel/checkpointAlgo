/**
 * ALGORITHME : Analyse de phrase
 * Objectif : Compter les caractères, les mots et les voyelles d'une phrase.
 */

function analyserPhrase(phrase) {
    // Initialisation des trois compteurs demandés
    let longueur = 0;
    let nbMots = 0;
    let nbVoyelles = 0;

    // Définition des voyelles pour la vérification
    const voyelles = "aeiouyAEIOUY";

    // Parcours de la phrase caractère par caractère
    for (let i = 0; i < phrase.length; i++) {
        let char = phrase[i];

        // 1. On compte chaque caractère
        longueur++;

        // 2. On vérifie si c'est une voyelle
        if (voyelles.includes(char)) {
            nbVoyelles++;
        }

        // 3. On compte un mot dès qu'on voit un espace ou le point final
        if (char === " " || char === ".") {
            nbMots++;
        }

        // Condition d'arrêt : on stoppe l'analyse au premier point rencontré
        if (char === ".") break;
    }

    // Affichage des résultats dans la console
    console.log("--- Résultats ---");
    console.log("Longueur : " + longueur);
    console.log("Nombre de mots : " + nbMots);
    console.log("Nombre de voyelles : " + nbVoyelles);
}

// Exemple d'utilisation (Tu peux changer la phrase ici)
analyserPhrase("Le basket est incroyable.");
