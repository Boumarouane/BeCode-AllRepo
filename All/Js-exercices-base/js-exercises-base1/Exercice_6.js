// Dans un fichier séparé, créer une fonction permettant d’afficher le reste de leur division. L’appeler depuis le fichier html.

document.getElementById("valider").addEventListener("click", () => {
    let firstNumber = document.getElementById("premier_nombre").value
    let secondNumber = document.getElementById("deuxieme_nombre").value

    alert(firstNumber % secondNumber)
});