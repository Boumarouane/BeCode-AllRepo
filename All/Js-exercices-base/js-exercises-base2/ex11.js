// Créer un bouton. Au click de ce bouton, lancer la fonction `calculMoyenne`.

// Cette fonction va calculer la moyenne des nombres entrés au clavier :

// - demande à l'utilisateur d'entrer un nombre entier.
// - si l'utilisateur entre autre chose qu'un nombre entier, un message d'alerte signale l'erreur et ensuite, la fonction redemande à l'utilisateur d'entrer un nombre entier.
// - tant que le nombre entré est positif ou nul, la fonction mémorise ce nombre et l'additionne aux autres nombres précédemment entrés.
// - si le nombre est négatif, alors la fonction calcule la moyenne de tous les nombres entrés en divisant la somme totale par le nombre de valeurs entrées.
// - la fonction affiche le nombre de valeurs entrées
// - la fonction affiche la moyenne


document.getElementById('moyenne').addEventListener('click', () => {
    let calculMoyen = () => {
        let request = prompt("Veuillez entrer un nombre entier");
        let replace = request.replace(',','.');
        let number = parseFloat(replace);
        if(Number.isInteger(number)){
            let a = number
            let calculMoyenDeux = () => {
                let requestTwo = prompt("Veuillez entrer un deuxième entier");
                let replaceTwo = requestTwo.replace(',','.');
                let numberTwo = parseFloat(replaceTwo);
                if(Number.isInteger(numberTwo) && numberTwo >= 0){
                    let b = numberTwo;
                    let addition = a + b;
                    alert("C'est un nombre positif donc la somme est : " + addition +
                    "\nNombre de valeur entrées : " +  2 );
                }
                else if(Number.isInteger(numberTwo) && numberTwo < 0){
                    let b = numberTwo;
                    let moyenne = (a + b) / 2;
                    alert("C'est un nombre négatif donc la moyenne est " + moyenne +
                            "\nNombre de valeur entrées : " +  2 );
                }
                else{
                    alert("Deuxième nombre pas validé");
                    calculMoyenDeux();
                }
            }
        calculMoyenDeux();
        }
        else{
            alert("Ce n'est pas un nombre entier");
            calculMoyen();
        }
    }
    calculMoyen();
})


