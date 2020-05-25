// Créer une fonction qui :

// - demande la saisie d'un rayon;
// - retourne la surface du cercle de ce rayon.

// Afficher ensuite le résultat de l'appel à cette fonction en cliquant sur un bouton.


document.getElementById("aire").addEventListener("click", () => {
    let calculateArea = () => {
        let rayon = document.getElementById("rayon").value ;
        let aire =  (rayon * 2) * Math.PI;
        alert(aire);
    }
    calculateArea();
});
