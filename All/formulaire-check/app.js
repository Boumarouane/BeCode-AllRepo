
// Animation GSAP
let t1 = new TimelineMax({onUpdate:updatePercentage});

const controller = new ScrollMagic.Controller();

t1.from("#hacker", .5, {y:30, opacity:0});
t1.from("#cookies", .5, {y:30, opacity:0});
t1.from("#todo", .5, {x:30, opacity:0});

const scene = new ScrollMagic.Scene({
    triggerElement:".projet",
    triggerHook:"onLeave",
    duration:"100%"
})

.setPin(".projet")
.setTween(t1)
.addTo(controller);

function updatePercentage(){
    t1.progress();
}


// Requete ajax
let todo = document.getElementById("todolist")

async function afficheRepo(){
    let url = "https://api.github.com/search/repositories?q=user:Boumarouane"
    let demande = await fetch(url)
    let donnee = await demande.json()

    donnee.items.forEach(element => {
        if(element.full_name === 'Boumarouane/todolist-json'){
        let lien = document.createElement("a");
        lien.href = element.html_url;
        console.log(element.full_name);
        lien.textContent = element.full_name
        let resultat = document.createElement("p")
        resultat.appendChild(lien)
        todo.appendChild(resultat);
        }
    });
}
afficheRepo();