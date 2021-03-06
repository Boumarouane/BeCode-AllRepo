/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        constructor(name, greeting) {
        this.name = name;
        this.greeting = greeting;
        }
        sayHello() {
        return `${this.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {
        greeting='miaou';
    }

    class Dog extends Animal {
        greeting='Wouf';
    }
        
    document.getElementById("run").addEventListener("click", () => {
        const cat = new Cat(" ");
        console.log(cat.sayHello());

        const dog = new Dog(" ");
        console.log(dog.sayHello());
        });
        })();
