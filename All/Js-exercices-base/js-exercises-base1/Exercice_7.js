// Demander à l’utilisateur sa pointure et son année de naissance. Créer une fonction qui fait les calculs suivants :

// 1. Multiplier la pointure par 2
// 2. Ajouter 5 au résultat
// 3. Multiplier le tout par 50
// 4. Soustraire l’année de naissance
// 5. Ajouter au tout 1766

// La fonction doit retourner le résultat.
// Tester avec votre date de naissance et votre pointure. **Attention : n'utiliser une seule variable « resultat »**.

document.getElementById("valider").addEventListener("click", () => {
    let pointure = document.getElementById("pointure").value;
    let annee = document.getElementById("annee").value;
    pointure = (pointure * 2 + 5)* 50;
    let resultat = pointure - annee + 1766;
    alert(resultat);
});
