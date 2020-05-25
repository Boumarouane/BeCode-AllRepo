// b est toujours initialisée à 2
// Quel est le résultat des opérations suivantes ?

// - `a=b++;`
// - `a=++b;`
// - `a=b--;`
// - `a=--b;`
// - `a+=b++;`
// - `a=1; a+=++b;`
// - `a=1; a-=b++;`
// - `a=1; a-=++b;`
// - `a=1; a+=b--;`
// - `a=1; a+=--b;`

// Pour chacune des opérations, afficher l'opération effectuée, la valeur de `a` après l'opération et la valeur de `b` après l'opération.


    let operationNull = (x) => {
        b = 2;
        a = 0;
        return x;
    }
    operationNull();

    let operationOne = (y) => {
        b = 2;
        a = 0;
        return y;
    }
    operationOne();

document.getElementById("valider").addEventListener('click',()=>{
    alert("a = b++ = " + operationNull(a= b++) + " valeur de b = " + b++);
    alert("a = ++b = " + operationNull(a= ++b) + " valeur de b = " + ++b);
    alert("a = b-- = " + operationNull(a = b--) + " valeur de b = " + b--);
    alert("a = --b = " + operationNull(a = --b) + " valeur de b = " + --b);
    alert("a+= b++ = " + operationNull(a+= b++) + " valeur de b = " + b++);
    alert("a+= ++b = " + operationOne(a+= ++b) + " valeur de b = " + ++b);
    alert("a-= b++ = " + operationOne(a-= b++) + " valeur de b = " + b++);
    alert("a-= ++b = " + operationOne(a-= ++b) + " valeur de b = " + b++);
    alert("a+= b-- = " + operationOne(a+= b--) + " valeur de b = " + b--);
    alert("a+= --b = " + operationOne(a+= --b) + " valeur de b = " + --b);
})