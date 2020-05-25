/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  //Fonction boutton
  document.getElementById("run").addEventListener("click", () => {

    //Attribuer les valeurs des id à des variables
    let input1 = document.getElementById("pass-one").value;
    let input2 = document.getElementById("pass-two").value;

    //Condition en cas de mp corrects
    if (input1 == input2){
      alert("Merci maintenant nous pouvons vous hacker, bisous");
    }
    //Condition en cas de mp différents
      else if(input1 != input2){
        document.getElementById("pass-one").classList.add("error");
        document.getElementById("pass-two").classList.add("error");
      }
      else{}
  });
})();
