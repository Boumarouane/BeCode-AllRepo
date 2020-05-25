/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //1) Sélectionne les balises dont la classe est "target"
    let classe = document.getElementsByClassName("target");

    //2) Remplace leurs contenus par "owned"
    for (let i = 0; i < classe.length; i++) {
    console.log(classe[i]);
    classe[i].innerHTML = "owned !";
    }
})();
