/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

//1) Séléctionner la 2ème balise de la class div
  let div = document.getElementsByTagName("div")[2];

//2) Créer un élement "table" qui permet de représenter un tableau de données
  let table = document.createElement("table");

//3) Créer un élement "tbody" pour contenir les elements "tr"
  let tbody = document.createElement("tbody");

//4) Créer une boucle for pour générer 10 fois un element "tr"
  for (let a = 0; a < 10; a++) {
    let tr = document.createElement("tr");
    //5) Puis créer une autre boucle for pour créer des elements "td" qui contiendront une multiplication 
    for (let b = 0; b < 10; b++) {
      let td = document.createElement("td");
      let mult = document.createTextNode((a + 1)*(b + 1));

      //6) Rajouter le texte dans "td"
      td.appendChild(mult);

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
