/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    //Fonction pour le boutton
    document.getElementById("run").addEventListener("click", () => {
        // your code here

        //Variable contenant le report de l'id de l'input
        let numbers = document.getElementById("numbers").value;
        
        //Replacer les elements de la chaine de caractère
        let placement = numbers.replace(/[ ,]+/g, ", ");

        numbers = placement;

        //(La méthode split() permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes.)
        let separation = numbers.split(",");

        //La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. .sort((a,b)=> a-b ); => a se pose la question = ou se placer par rapport à b
        //On trie les éléments de la variable 
        separation.sort((a,b)=> a-b );

        //On reprend la valeur du report et on dit qu'elle est égal à la variable trier et séparer
        document.getElementById("numbers").value = separation;
    });
})();
