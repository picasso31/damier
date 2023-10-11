// Cette ligne affiche un message dans la console pour indiquer que le script a été chargé.
console.log("Script chargé !");

// Crée un élément de tableau HTML (<table>) et l'attache au corps du document HTML.
let damier = document.createElement("table");
document.body.appendChild(damier);

// Crée un tableau de lettres pour les en-têtes de colonne.
let lettres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

// Boucle pour créer les lignes du damier (8 lignes).
for (let Ligne = 0; Ligne <= 8; Ligne++) {
    // Crée un élément de ligne (<tr>) pour chaque ligne du damier.
    let uneLigne = document.createElement("tr");
    damier.appendChild(uneLigne);

    // Boucle pour créer les cellules dans chaque ligne (8 cellules par ligne).
    for (let Cell = 0; Cell <= 8; Cell++) {
        // Crée un élément de cellule (<td>) pour chaque cellule dans la ligne.
        let uneCell = document.createElement("td");

        // Alterne la couleur de fond des cellules en fonction de leur position (damier alternant).
        if ((Ligne + Cell) % 2 === 0) {
            uneCell.style.backgroundColor = "green";
        } else {
            uneCell.style.backgroundColor = "white";
        }

        // Attache la cellule à la ligne.
        uneLigne.appendChild(uneCell);

        // Gère la coloration des cellules en fonction de leur position dans le damier.
        if (Ligne == 0 || Cell == 0) {
            uneCell.style.backgroundColor = "white";
        }
        if (Cell == 0 && Ligne >= 1) {
            uneCell.textContent = Ligne; // Affiche le numéro de la ligne.
        }
        if (Ligne == 0 && Cell >= 1) {
            uneCell.textContent = lettres[Cell - 1]; // Affiche la lettre de la colonne.
        }
    }
}