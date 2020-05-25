/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //1) Définir des variables et mettre dedans des prompt avec les questions à poser
    let age = prompt("Quel âge as-tu ? ");
    let sexe = prompt("Es-tu un mal ou une femelle ? ");
    let ville = prompt("Dans quel ville habites-tu ?");

    //2) Mettre en condition de if -> confirm("texte" + la réponse des prompt contenu dans les variables)
    if (confirm("Veuillez confirmer les informations : " + sexe + ' de ' + age + ' ans ' + ' habite à ' + ville )){
        //3) Afficher que les infos sont bien confirmer avec une alert()
        alert("Je ne sais plus pourquoi je vous demande ça ?")
    }
    else{
        //4) Mettre les même variable pour recommencer 
        let age = prompt("Quel âge as-tu ? ");
        let sexe = prompt("Es-tu un mal ou une femelle ? ");
        let ville = prompt("Dans quel ville habites-tu ?");
        confirm("Veuillez confirmer les informations : " + age + ' ' + sexe + ' ' + ville );
    }
})();
