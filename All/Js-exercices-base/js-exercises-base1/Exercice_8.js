// Demander à l’utilisateur de saisir son âge. S’il a plus de 18 ans, afficher *" Vous êtes majeur "*. Sinon afficher *" Vous êtes mineur "*.


document.getElementById("valider").addEventListener("click", () => {
    let age = document.getElementById("age").value;
    if(age >= 18 ){
        alert("Vous êtes majeur");
    }
    else {
        alert(" Vous êtes mineur ");
    }
});