/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {

    // your code here

    const fizzbuzz = () => {
        let number = parseInt(prompt("Indiquez un chiffre"));
        if (number >= 1 && number <= 100){
            if (number != 0 && ( number % 3 == 0 )) {
                if (number != 0 && ( number % 5 == 0 )){
                    console.log ("Le chiffre " + number + " est FizzBuzz");
                }
                else{
                consol.log ("Le chiffre " + number + " est fizz");
                }
            }
            else if (number != 0 && ( number % 5 == 0 )){
                if (number != 0 && ( number % 3 == 0 )){
                    console.log ("Le chiffre " + number + " est FizzBuzz");
                }
                else{
                console.log ("Le chiffre " + number + " est Buzz");
                }
            }
            else {
                console.log ("Le chiffre " + number + " n'est pas un multiple de 3 ou de 5, ou les deux");
            }
        }
        else {
            console.log ("Le chiffre " + number + " n'est pas compris entre 1 et 100");
        }
    }
    fizzbuzz();
    
})();
