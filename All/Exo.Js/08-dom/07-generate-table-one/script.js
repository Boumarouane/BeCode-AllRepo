/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  //1) Séléctionner la 3ème balise de la class div
  let div = document.getElementsByTagName("div")[2];

  //2) créer un élement "table" qui permet de représenter un tableau de données
    let table = document.createElement("table");

  //3) créer un élement "tbody" pour contenir les elements "tr"
    let tbody = document.createElement("tbody");

  //4) Créer une boucle for pour générer 10 fois un element "tr" (horizontalement)
    for (let a = 0; a < 10; a++) {
      let tr = document.createElement("tr");

      //5) Puis créer une autre boucle for pour créer des element "td" (verticalement) qui contiendront du texte 
      for (let b = 0; b < 1; b++) {
        let td = document.createElement("td");
        let texte = document.createTextNode(a +1);

        //6) Rajouter le texte dans "td"
        td.appendChild(texte);

        //7) Rajouter le "td" contenent le texte dans le "tr"
        tr.appendChild(td);
      }
    //8) Rajouter le "tr" dans l'element "tbody"
    tbody.appendChild(tr);
    }

    //9) Rajouter l'element "tbody" dans l'element "table"
    table.appendChild(tbody);

    //10) Rajouter l'element "table" dans  la classe "div"
    div.appendChild(table);
})();
