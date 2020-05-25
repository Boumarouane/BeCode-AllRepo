// Créer un bouton "Calculer la surface d'un rectangle". Faites en sorte que lorsqu'on clique sur le bouton, la fonction `surfaceRectagle()` se lance. Cette fonction va demander la saisie d'une largeur, d'une longueur et afficher la surface du rectangle correspondant.

// Créer ensuite un nouveau bouton "Calculer le périmètre d'un rectangle". Faites en sorte que lorsqu'on clique sur le bouton, la fonction `periRectangle()` se lance. Cette fonction va demander la saisie d'une largeur, d'une longueur et afficher le périmètre du rectangle.

// Pour l'affichage des résultats, pensez à mettre du texte pour qu'on sache à quoi se réfère les réponses finales !



document.getElementById("surface").addEventListener("click", () => {
    let surfaceRectagle = () => {
        let longueur = document.getElementById("Longueur").value ;
        let largeur = document.getElementById("Largeur").value ;
        let resultat = longueur * largeur;
        alert(`La surface est de : ${resultat}`);
    }
    surfaceRectagle();
});


document.getElementById("perimetre").addEventListener("click", () => {
    let periRectangle = () => {
        let Longueur = document.getElementById("Longueur").value ;
        let Largeur = document.getElementById("Largeur").value ;
        let longueurInt = parseInt(Longueur);
        let largeurInt = parseInt(Largeur);
        let resultatPeri = longueurInt * largeurInt * 2;
        alert(`le périmètre est de : ${resultatPeri}`);
    }
    periRectangle();
});


