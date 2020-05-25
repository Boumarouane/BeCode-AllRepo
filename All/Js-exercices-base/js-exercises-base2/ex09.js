// Créer un bouton. Au click de ce bouton, lancer la fonction `testWhile`. Cette fonction demande à l'utilisateur de saisir une chaîne de caractères contenant la lettre `p`, et le redemande tant que l'utilisateur ne l'a pas fait. Il affiche ensuite la chaîne saisie entre guillemets.



document.getElementById("Word").addEventListener("click", () => {
    let testWhile =  () => {
        let letter = "p"
        let word = prompt("écrivez un mot contenant la lettre 'p'");
        if (word.includes(letter)) {
        alert("'" + word + "'")
        }    
        else{
            testWhile();
        }
    }
    testWhile();
});