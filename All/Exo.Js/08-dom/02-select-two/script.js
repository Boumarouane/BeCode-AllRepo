/* becode/javascript
 *
 * /08-dom/02-select-two/script.js - 8.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //1) Sélectionne la balise p dont la classe est "target"
    let classe = document.getElementsByClassName("target");

    // 2) Faire une boucle pour traiter le premier element 
    for (let i = 0; i < classe.length; i++) {
    console.log(classe[i]);
    classe[i].innerHTML = "owned !";
    }
})();
