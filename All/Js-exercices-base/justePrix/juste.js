// Déclarez les variables suivantes : 

// * Variable qui sera utilisée pour afficher un message
// * Variable qui va compter le nombre d'essais
// * Variable de la valeur **minimum** qu'on peut entrer (ici 20)
// * Variable de la valeur **maximale** qu'on peut entrer (ici 80)

// Déclarez les fonctions suivantes : 

// * crée une fonction qui retourne un numéro aléatoire arondi entre la variable minimale et la variable maximale
// * crée une fonction 
// 	- qui prends un argument pour tester si le numéro qu'on a entré est le bon 
// 	- la fonction retourne un de ces 3 messages : `C'est plus`, `C'est moins`,`C'est juste tu as trouvé en X coups`


// Utiliser la console **ou** les fonctions natives suivantes :

// - window.prompt();
// - window.alert();
// - window.confirm();

let number = 0;
let numberMin  = 20;
let numberMax = 80;

let demande = () => {
    let affiche = prompt('Bienvenue au juste prix veuillez entrer un nombre entre 20 et 80'); 
    return affiche;
}
demande();

let randomNumber = () => {
    let random =  Math.floor(Math.random() * (numberMax - numberMin)) + numberMin;
    return random;
}
randomNumber();
console.log(random);

let testNumber = () => {
    for(let i = 0; demande() != randomNumber();i++){
        if(x < randomNumber()){
            alert("C'est plus");
            number++
            demande();
        }
        else if (x > randomNumber()){
            alert("C'est moins");
            number++
            demande();
        }
        else{
            alert("C'est juste tu as trouvé en " + number + " coups");
        }
    }
}
testNumber();






