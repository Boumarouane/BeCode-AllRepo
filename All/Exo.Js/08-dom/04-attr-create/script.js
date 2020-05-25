/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //1) Récupère la valeur de l'attribut "data-image" de la balise dont l'id est "source"
    let id = document.getElementById("source");
    let data = id.getAttribute("data-image");

    //2) Crée ensuite une balise image dans la balise d'id "target" 
    let target = document.getElementById('target');
    let creat_img = document.createElement('img');
    let append = target.appendChild(creat_img);

    //3) Afficher la valeur de la balise image 
    creat_img.setAttribute('src', data);

    //4) Supprime la balise source.
    let material = document.querySelector('body > div > div > section.material');
    console.log(material);
    let remove = material.removeChild(id);
    console.log(remove);
})();
