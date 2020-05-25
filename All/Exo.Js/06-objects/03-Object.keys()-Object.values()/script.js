/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here
    //faire une fonction boutton
    document.getElementById("run").addEventListener("click", () => {
        //afficher dans la console la liste des keys et leur valeurs avec (Object.keys(const) ou valeur(const));
        //La méthode Object.keys() renvoie un tableau contenant les noms des propriétés propres à un objet 
        console.log(Object.keys(person));
        //La méthode Object.values() renvoie un tableau contenant les valeurs des propriétés propres énumérables d'un objet
        console.log(Object.values(person));
    });
})();
