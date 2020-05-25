/* becode/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //2) Variable = prompt ("question ?", "réponse à mettre");
    let commentaire = prompt("Quel est votre prénom ?", "Prénom");

    //3) Concaténer dans une alert ("du texte" + la variable contenant la réponse)
    alert("Bonjour " + commentaire + " !");
})();
