// 1. Créez un tableau nommé `tab` dont le premier élément est -2, le deuxième 1 et le troisième 4
// 2. Créez une fonction `additionne` prenant un argument x et renvoyant le résultat de l'addition de x à 2
// 3. Créez une fonction `affiche`, appelée au clic sur un bouton, qui affiche dans des boîtes d'alerte successivement le résultat de `additionne` appliqué au premier élément, puis au dernier élément du tableau (en utilisant la propriété `length`).

let tab = [-2, 1, 4];

let additionne = (x) => {
    return x + 2;
}

document.getElementById("affiche").addEventListener("click", () => {
    let affiche = () => {
        
        alert(additionne(tab[0]));
        alert(additionne(tab.length));
    }
    affiche();
});