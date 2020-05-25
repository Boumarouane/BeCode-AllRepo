(() => {

//Créer un tableau pour contenir les lettres du mot : 'B','O','N','J','O','U','R',
let array = ['B','O','N','J','O','U','R'];

//Créer un autre tableau pour mettre les lettres devinées : '','','','','','','_'
let arrayEmpty = ['_','_','_','_','_','_','_' ];

alert("Bienvenue dans le jeux du pendu,\n veuillez deviner le mot exact.");

//Écrivez une fonction appelée "guessLetter"
let guessLetter = () => {
    let value = prompt("On le dit tous les matins", "lettre").toUpperCase();

    //Voir si la lettre devinée se trouve dans le mot
    if(array.includes(value)){
        
        //Si oui changer le tableau des lettres devinées pour ajouter la nouvelle lettre
        let idx = array.indexOf(value);
        while (idx != -1) {
            arrayEmpty.splice(idx,1,value);
            idx = array.indexOf(value, idx + 1);
            //Afficher dans la console les lettres devinées
            console.log(arrayEmpty);
            }

        alert(`Bravo, voici les lettres trouvées :  [${arrayEmpty}]`);
    }
    else {
        alert(`il n'y a pas de ${value} dans le mot`);
        guessLetter();
    }
    //Le jeu doit savoir quand la partie est finie et féliciter le joueur
    if(array.join() == arrayEmpty.join()){
        alert("Félicitation vous êtes poli maintenant");
    }
    else{
        guessLetter();
    }
}
guessLetter();

})();