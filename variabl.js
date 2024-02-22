// global scope
var s =10;
let t=20;
const u =52;


// local - block scope

{
    let t = 25;
    console.log(t)
}
// local - function scope
let func = () =>{
 const u = 35;
}
console.log(t);