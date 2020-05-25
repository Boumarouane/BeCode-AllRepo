// Créer un bouton. Au click de ce bouton, lancer la fonction `jourDeLaSemaine()`. Cette fonction détermine le jour de la semaine et affiche selon le cas dimanche, lundi, mardi... etc. jusqu'à samedi.


document.getElementById("jour").addEventListener("click", () => {
    let jourDeLaSemaine = () => {
        let date = new Date()
        let jour = date.getDay()
        switch (jour) {
            case 0:
                alert("on est dimanche")
                break;
            case 1:
                    alert("on est lundi")
                break;
            case 2:
                    alert("on est mardi")
                break;
            case 3:
                    alert("on est mercredi")
                break;
            case 4:
                    alert("on est jeudi")
                break;
            case 5:
                    alert("on est vendredi")
                break;
            case 6:
                    alert("on est samedi")
            default:
                alert("quel jour ?")
        }
    }
    jourDeLaSemaine();
});
