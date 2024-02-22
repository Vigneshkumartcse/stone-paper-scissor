let subscriber = "jo";

let response = subscriber ? `Welcome ${subscriber}` :
"Kindly Subscribe";
console.log(response);

let age = 23;
let vt = age >= 200 ?"akkkk" : "not allo";
console.log(vt);

let score = 100 ;
let rec = score <=10 ? "low": score <=50  ? "medium": score <=100 ? "high" : "very high";
console.log(rec)

let player = "sis";
let cs = "sis";
let com = 
player === cs 
? " tie"
: player === "rock" && cs === "sis" 
? "c wins":
player==="paper" && cs === "sis"
? "computer win":
player === "sis" && cs === " rock"
?"cs wins": "player wins";
console.log(com);