/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    //1 fonction boutton
    document.getElementById("run").addEventListener("click", () => {
      //2 Grâce à Object.fromEntries, on peut convertir des objets Array en Object 
      const arr = [ ['name', 'Skitty'], ['species', 'cat'], ['age', 9], ['gender','female'], ['color','tabby']];
      const obj = Object.fromEntries(arr); 
      console.log(obj);

      //Avec Object.fromEntries et la méthode réciproque Object.entries()
      // const  = Object.fromEntries(
      //   Object.entries(keys)
      //   .map(( _, i ) => [ keys[i], values[i] ])
      // );
      // console.log(obj); 
  });
})();
