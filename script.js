// console.log("Hello World");
let humanScore=0,computerScore=0;
function getComputerChoice(){
    let num=Math.floor(Math.random()*10);
    if(num%3==0) return "Rock";
    else if(num%2==0) return "Paper";
    else return "Scissor";
}

function getHumanChoice(){
    return prompt("Enter your choice for Rock,Paper,Scissors");
}

function playRound(humanChoice,computerChoice){
    let human_choice=humanChoice.toLowercase();
    let computer_choice=computerChoice.toLowercase();
    if(human_choice===computer_choice){
        console.log("It's a tie");
    }
    else if(human_choice==="rock"&&computer_choice==="paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if(computer_choice==="rock"&&human_choice==="paper"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if(human_choice==="rock"&&computer_choice==="scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if(human_choice==="scissors"&&computer_choice==="rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else if(human_choice==="scissors"&&computer_choice==="paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else{
        console.log("You lose! Paper beats Scissors");
        computerScore++;
    }

}

