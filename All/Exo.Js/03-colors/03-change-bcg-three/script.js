/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //1 selectionner l'id + ajout de l'event click
    // document.getElementById('run').addEventListener("click", () => {
    //     //2 variable contenant le calcul du random = la couleur en hexadecimal
    //     let random = Math.random()*0xFFFFFF<<0;
    //     //3 reprendre le backgroundcolor = '#' (= le calcul random).toString(16) pour transformer en valeur hexadecimal
    //     document.body.style.backgroundColor = '#' + random.toString(16);
    // });
    

    //Explication de Brice le beau gosse sur la manière rgb

    document.getElementById('run').addEventListener("click", () => {
    // variable = le calcul de la valeur random en nombre entier
    let rnda = parseInt(Math.random()*255);
    let rndb = parseInt(Math.random()*255);
    let rndc = parseInt(Math.random()*255);
    // reprendre la valeur des 3 variables
    let color = `rgb(${rnda},${rndb},${rndc})`;
    document.body.style.backgroundColor = color;
    });

    
})();
