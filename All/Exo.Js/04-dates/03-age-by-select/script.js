/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById('run').addEventListener("click", () => {
        let année = document.getElementById("dob-year").value ;
        let mois = document.getElementById("dob-month").value ;
        let jour = document.getElementById("dob-day").value ;
        let date = new Date;
        let year = date.getFullYear();
        let soustraction = year - année ;
        alert("Vous avez : " + soustraction + ' ans');
    });

})();
