/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    // les classes sont juste des fonctions spéciales
        class Person {
            //La méthode constructor est une méthode qui est utilisée pour créer et initialiser un objet lorsqu'on utilise le mot clé class
            constructor(firstname,lastname){
                
                this.firstname = firstname;
                this.lastname = lastname;
            }
            sayHello(){
                return "hello " + this.firstname + this.lastname;
            }
        }
        document.getElementById("run").addEventListener("click", () =>{
            const best_kebab = new Person("samourai ", "pitta");
            console.log(best_kebab.sayHello());
    }); 
})();
