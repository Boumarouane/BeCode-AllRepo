// L'IMC ou Indice de Masse Corporelle est utilisé pour évaluer les risques sur la santé liés au surpoids chez l'adulte.
// Il se calcule en divisant le poids exprimé en kg par le carré de la taille exprimée en mètre.

//     Par exemple :
//     - Une personne pesant 95 kg et mesurant 1,81 m a un IMC de 95/(1.81*1.81)= environ 29,0
//     - Une personne pesant 48 kg et mesurant 1,69 m a un IMC de 48/(1.69*1.69)= environ 16,8
//     - Une personne pesant 61 kg et mesurant 1,57 m a un IMC de 61/(1.57*1.57)= environ 24,7

// En fonction de la valeur obtenue, on peut estimer la corpulence de la manière suivante :

//     - moins de 16,5 : dénutrition ou famine
//     - 16,5 <= IMC < 18,5 : maigreur
//     - 18,5 <= IMC < 25 : corpulence normale
//     - 25 <= IMC < 30 : surpoids
//     - 30 <= IMC < 35 : obésité modérée
//     - 35 <= IMC < 40 : obésité sévère
//     - plus de 40 : obésité morbide

// Créer un bouton. Au click de ce bouton, lancer la fonction `calculIMC`.

// Cette fonction va demander le poids et la taille, calculer l'IMC, ensuite l'afficher avec 2 décimales et enfin afficher un message disant dans quelle catégorie de corpulence on se situe.


document.getElementById('masse').addEventListener("click", () => {
    let calculIMC = () => {
        let poids = prompt("Quel est votre poids ?");
        let taille = prompt("Quel est votre taille ?");
        let replacePoids = poids.replace(',','.');
        let replaceTaille = taille.replace(',','.');
        let poidsInt = parseFloat(replacePoids);
        let tailleInt = parseFloat(replaceTaille);
        let imc = poidsInt/(tailleInt * tailleInt);
        console.log(imc);
        
        if(imc < 16.5){
            alert('dénutrution ou famine');
        }
        else if(imc <= 16.5 && imc < 18.5){
            alert('maigreur');
        }
        else if(imc <= 18.5 && imc < 25){
            alert('corpulence normale');
        }
        else if(imc <= 25 && imc < 30){
            alert('surpoids');
        }
        else if(imc <= 30 && imc <35){
            alert('obésité modérée');
        }
        else if(imc <= 35 && imc < 40){
            alert(' obésité sévère');
        }
        else{
            alert('obésité morbide');
        }
    }
    calculIMC();
});
