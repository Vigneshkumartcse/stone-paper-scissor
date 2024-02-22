const start =()=> {
    const startGame = confirm( "Are you ready to play? stone ,paper scissors"); 
    startGame ? playGame() : alert("maybe next time "); 
};
 const playGame = () =>{
    while(true){
       let playerChoice = getPlayerChoice();
       playerChoice = formatPlayerChoice(playerChoice)
       if (playerChoice === ""){
        invalidChoice();
        continue;
       }
       if (!playerChoice){
        notPlay();
        break;
       }
       playerChoice = checkPlayerChoice(playerChoice);
       if(!playerChoice){
        invalidChoice();
        continue
       }
       const computerChoice = getComputerChoice();
       const result = winner(playerChoice,computerChoice)
       displayResult(result);
       if(askAgain()){
        continue;
       }else{
        thanksPlay();
        break;
       }


    }

 }

 const getPlayerChoice = () =>
{
    return prompt("enter rock , paper or scissor");
};

const formatPlayerChoice = () => {
    if(playerChoice === ""){
        return playerChoice.trim().toLowerCase();
    }
    else{
        return false;
    }
   
  

}

const invalidChoice = () => {
    return alert("please enter something")
}

const notPlay =() => {
    return alert ("let's play next time")
}
const checkPlayerChoice = () => {
    if(playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissor" ){
        return playerChoice;

    }else{
        return false
    }
}


    

const getComputerChoice = () =>{
    let randomNumber = Math.floor(Math.random() * 3) +1 ;
    const rna =["rock","paper","scissor"];
    return rps[randomNumber]
};

const winner = (player , computer) => {
    const matchWinner = 
    player ===  computer  ? "match tie"
    :player === "rock" && computer==="paper" ? 
    `playerone : ${player} \n computer ${computer}\ncomputer wins`
    :player === "paper" && computer==="scissor" ? 
    `playerone : ${player} \n computer ${computer}\ncomputer wins`
    :player === "scissor" && computer==="rock" ? 
    `playerone : ${player} \n computer ${computer}\ncomputer wins`
    :`playerone : ${player} \n computer ${computer}\nplayerone wins`;
    return matchWinner;
};

const displayResult = (result) => {
alert(result);
};
const askAgain = () => {
    return confirm("playagain");
};

const thanksPlay =( ) => {
    alert ("thanks for playing")
};
 start();