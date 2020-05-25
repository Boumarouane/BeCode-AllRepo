/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    //1) Poser la qestion avec prompt
    var demande = prompt("Voulez vous du gâteau ?");

    //2) Mettre une condition if...else
    if( demande == "oui"){
        alert("Félicitation");
    }
    else{
        alert("du gâteau, ça ne se refuse pas !")
    }
})();
