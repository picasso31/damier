// Cette ligne affiche un message dans la console pour indiquer que le script a été chargé.
console.log("Script chargé !");

// // Crée un élément de tableau HTML (<table>) et l'attache au corps du document HTML.
let damier = document.createElement("table");
document.body.appendChild(damier);

// // Crée un tableau de lettres pour les en-têtes de colonne.
let lettres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

// // Boucle pour créer les lignes du damier (8 lignes).
for (let ligne = 0; ligne <= 8; ligne++) {
    // Crée un élément de ligne (<tr>) pour chaque ligne du damier.
    let uneLigne = document.createElement("tr");
    damier.appendChild(uneLigne);

    
    

//     // Boucle pour créer les cellules dans chaque ligne (8 cellules par ligne).
    for (let cell = 0; cell <= 8; cell++) {
//         // Crée un élément de cellule (<td>) pour chaque cellule dans la ligne.
        let uneCell = document.createElement("td");
        //ma ligne demare a 0 quand ma ligne demarre a 0
        if (ligne === 0 ) {
            
            // dans le cas ou ma cellul est egal a 0 "=celle=="
            if (cell === 0) {

                //quand ma premiere ligne  est egal a 0 et que ma premiere cellule est egal a 0
            uneCell.style.backgroundColor = "unset";
                
            } else {
                uneCell.innerText = lettres[cell-1];
            }
            uneCell.style.border = "none";
        }else {
            //         // Alterne la couleur de fond des cellules en fonction de leur position (damier alternant).
            if ((ligne + cell) % 2 === 0) {
                console.log("ici on a ca",ligne);
                uneCell.style.backgroundColor = "black";
                console.log("voici mes cases black",uneCell);
            } else {
                uneCell.style.backgroundColor = "blue";
                console.log("et cases blache",uneCell);
            }
        }

//         // Attache la cellule à la ligne.
        uneLigne.appendChild(uneCell);

//         // Gère la coloration des cellules en fonction de leur position dans le damier.
//         if (Ligne == 0 || Cell == 0) {
//             uneCell.style.backgroundColor = "white";
//         }
//         if (Cell == 0 && Ligne >= 1) {
//             uneCell.textContent = Ligne; // Affiche le numéro de la ligne.
//         }
//         if (Ligne == 0 && Cell >= 1) {
//             uneCell.textContent = lettres[Cell - 1]; // Affiche la lettre de la colonne.
        }
//     }
}
