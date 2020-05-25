// Créer un bouton. Au click de ce bouton, lancer la fonction `somme`. Cette fonction demande trois fois à l'utilisateur de saisir un nombre et affiche ensuite la somme de ces trois nombres.


document.getElementById("nombre").addEventListener("click", () => {
    let somme = () => {
        let numberOne = prompt("Veuillez saisir un nombre");
        let numberTwo = prompt("Un deuxième");
        let numberThree = prompt("Un troisième");
        alert(Number(numberOne) + Number(numberTwo) + Number(numberThree));
    }
    somme();
})