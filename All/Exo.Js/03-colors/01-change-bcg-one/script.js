/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //1 selectionner les id des buttons
    let id = document.getElementById('red');
    //2 rajouter un evenement quand on click
    id.addEventListener("click", () => {
    //3 reprendre l'element body puis style css puis backgroundcolor et changer la couleur au click
        document.body.style.backgroundColor = (red);
    });

    document.getElementById('green').addEventListener("click", () => {
        document.body.style.backgroundColor = (green);
    });

    document.getElementById('yellow').addEventListener("click", () => {
        document.body.style.backgroundColor = (yellow);
    });

    document.getElementById('blue').addEventListener("click", () => {
        document.body.style.backgroundColor = (blue);
    });

})();
