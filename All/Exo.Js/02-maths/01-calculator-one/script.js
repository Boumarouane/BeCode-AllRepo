/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    //Rapporter l'id ("") puis mettre un Event et créer une fonction pour qu'au click il y est un calcul qui se fasse puis alert la variable contenant la réponse.

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        let a = Number(document.getElementById('op-one').value);
        let b = Number(document.getElementById('op-two').value);
        let add = a + b; 
        alert (add);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        let a = Number(document.getElementById('op-one').value);
        let b = Number(document.getElementById('op-two').value);
        let sub = a - b; 
        alert (sub);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        let a = Number(document.getElementById('op-one').value);
        let b = Number(document.getElementById('op-two').value);
        let mul = a * b; 
        alert (mul);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        let a = Number(document.getElementById('op-one').value);
        let b = Number(document.getElementById('op-two').value);
        let div = a / b; 
        alert (div);
    });
})();
