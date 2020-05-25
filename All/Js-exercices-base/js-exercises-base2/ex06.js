// 1. Créez un tableau nommé `tab` dont le premier élément est -2, le deuxième 1 et le troisième 4
// 2. Créez une fonction `soustrait` prenant un argument x et renvoyant le résultat de la soustraction de x-2 si x est positif ou nul, sinon renvoyer la chaîne de caractères "Nombre négatif!".
// 3. Créez une fonction `affiche`, appelée au clic sur le bouton, qui affiche dans des boîtes d'alerte successivement le résultat de `soustrait` appliqué au premier élément, puis au dernier élément du tableau (en utilisant la propriété `length`).


let tab = [-2, 1, 4];

let soustrait = (x) => {
    if(x > 0 || x === null){
    return x - 2;
    }else{
        return "Nombre négatif!"
    }
}

document.getElementById("affiche").addEventListener("click", () => {
    let affiche = () => {
        
        alert(soustrait(tab[0]));
        alert(soustrait(tab.length));
    }
    affiche();
});
