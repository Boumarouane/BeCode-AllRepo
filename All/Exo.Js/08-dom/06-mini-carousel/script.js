/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here

    //1) Récuperer la première balise img
    let image = document.getElementsByTagName("img")[0];

    //2) Définir une variable nul
    let i = 0;

    //3) Faire une fonction click
    document.getElementById("next").addEventListener("click", () => {
        //mettre une condition if...else
        //Si i === à [5] -1 donc 4 il revient à 0 sinon +1 à chaque click
        if(i === gallery.length -1) {
            i = 0;
        }
        else {
            i++;
        }
        //On attribut la valeur de la condition à la variable contenant le tableau que l'on attribut à la balise image que l'on attribut à Gandalf le gris...c'est logique!!!!
        image.setAttribute("src", gallery[i]);
    });
})();
