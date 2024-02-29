function getComputerChoice(){
    let res=Math.floor((Math.random()*2)+1);
    switch(res){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let playerScore=0;
let computerScore=0;

function playRound(){
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("choose between rock, paper and scissors!").toLowerCase();
    getResult(computerSelection,playerSelection);
}

function getResult(computerSelection,playerSelection){
    let ps=0;
    let cs=0;
    if(computerSelection=="rock" && playerSelection=="paper"){
        playerScore+=1;
        ps+=1;
    } else if(computerSelection=="rock" && playerSelection=="scissors"){
        computerScore+=1;
        cs+=1;
    } else if(computerSelection=="paper" && playerSelection=="rock"){
        computerScore+=1;
        cs+=1;
    } else if(computerSelection=="paper" && playerSelection=="scissors"){
        playerScore+=1;
        ps+=1;
    } else if(computerSelection=="scissors" && playerSelection=="rock"){
        playerScore+=1;
        ps+=1;
    } else if(computerSelection="scissors" && playerSelection=="paper"){
        computerScore+=1;
        cs+=1;
    }
    playGame(ps,cs);
}

function playGame(){
    if(playerScore>computerScore){
        console.log("you win");
    } else if(playerScore<computerScore){
        console.log("you lose");
    } else{
        console.log("you tie!");
    }
}

let num = parseInt(prompt("How many games do you wanna play between 1,3,5?"));

for (let i=0;i<num;i++){
    playRound();
}

playGame(playerScore,computerScore);