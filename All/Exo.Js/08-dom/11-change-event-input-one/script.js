/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    //Variable = attribuer l'id de l'input au nombre de saisi possible
    let passOne = document.getElementById('pass-one').maxLength = "10";

    //Fonction bontton "input"
    document.getElementById("pass-one").addEventListener("input", () => {
        
        //Afficher la convertion de la valeur mise /10 =
        document.getElementById('counter').innerHTML =
        //Afficher la valeur mise converti en nombre + "/10"
        document.getElementById("pass-one").value.length + "/10";
    });
})();
