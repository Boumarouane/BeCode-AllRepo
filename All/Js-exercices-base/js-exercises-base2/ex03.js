// 1. Créez deux variables globales `a` et `b`, initialisées respectivement à 3 et à 2.
// 2. Créez une fonction `triple` prenant un argument x et renvoyant le résultat de la multiplication de x par 3
// 3. Créez une fonction `affiche`, appelée au clic sur un bouton, qui affiche dans des boîtes d'alerte successivement le résultat de `triple` appliquée à `a`, puis à `b`.

let a = 3;
let b = 2;

let triple = (x) => {
    return x * 3;
}


document.getElementById("affiche").addEventListener("click", () => {
    let affiche = () => {
        
        alert(triple(b));
        alert(triple(a));
    }
    affiche();
});
