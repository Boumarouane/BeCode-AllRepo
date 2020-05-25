//Demander à l’utilisateur deux nombres à virgule. Ne garder que la partie entière du premier .
// Les multiplier et afficher le résultat dans une boîte de dialogue.

alert("Veuillez mettre deux nombres à virgule")

document.getElementById("valider").addEventListener("click", () => {
    let firstNumber = document.getElementById("premier_nombre").value;
    let wholeNumber = parseInt(firstNumber);
    let twoNumber = document.getElementById("deuxieme_nombre").value;
    let checkNumber = parseFloat(twoNumber.replace(',','.'));
    let resultat =  wholeNumber * checkNumber;
    alert(resultat);
});

