/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  //Fonction click
  document.getElementById("run").addEventListener("click", () => {

    //Attribuer les valeurs des id et des bordures rouge à des variables
    let input1 = document.getElementById("pass-one").value;
    let input2 = document.getElementById("pass-two").value;
    let border1 = document.getElementById("pass-one").style.borderColor="#FF0000";
    let border2 = document.getElementById("pass-two").style.borderColor="#FF0000";
    let borderRed = border1 + border2;

    //Condition en cas de mp différents
      if(input1 != input2){
        borderRed;
      }
    //Condition en cas de mp corrects
      else if (input1 == input2){
        alert("Merci maintenant nous pouvons vous hacker, bisous");
      }
      else{}
      });
})();
