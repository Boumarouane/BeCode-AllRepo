/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //1) Récupérer l'image de la balise img
    let image = document.getElementsByTagName("img")[0]; 

    //2) Rajouter l'événement onmouseover = à la fonction
    image.onmouseover = function(){

    //3) On séléctionne l'attribut "data-hover" dans la balise img
        let dataOver = image.getAttribute("data-hover");

    //4) Change l'image quand il y a la souris dessus
        image.setAttribute("src", dataOver);
    };
})();
