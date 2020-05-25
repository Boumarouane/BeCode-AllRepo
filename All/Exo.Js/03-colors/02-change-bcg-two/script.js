/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //1 selectionner l'id du boutton
    let id = document.getElementById('run');
    //2 ajouter un event au click
    id.addEventListener("click", () => {
    //3 récupérer la valeur de l'input (en reprenant l'id et en mettant .value pour la valeur)
        var input = document.getElementById("color").value;
    //4 rependre le backgroundcolor et le lié à la variable contenant la valeur de l'id
        document.body.style.backgroundColor = (input);
    });
    //l'idée c'est que quand la personne click sur le bouton (1 puis 2) la valeur que la personne va mettre dans l'input (3 puis 4) change la couleur du backgroundcolor.
})();
