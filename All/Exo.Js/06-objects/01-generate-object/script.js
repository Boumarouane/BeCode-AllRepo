/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //1 déclaration d'une variable objet nommée info
    let info = {
        firstname: "Boumarouane",
        lastname: "Issam",
        age: 25,
        city: "Louvière",
        country: "Belgium",
        }
    //2 déclarer une fonction au moment où la personne click sur le boutton...
    document.getElementById("run").addEventListener("click", () => {
        //3 afficher avec console.log (objet.chaque propriété que j'ai envie d'afficher);
        console.log(info.firstname);
        console.log(info.lastname);
        console.log(info.age);
        console.log(info.city);
        console.log(info.country);
    });
})();
