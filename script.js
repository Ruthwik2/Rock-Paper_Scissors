// console.log("Hello World");
let humanScore = 0, computerScore = 0, rounds = 0;
function getComputerChoice() {
    let num = Math.floor(Math.random() * 10);
    if (num % 3 == 0) return "Rock";
    else if (num % 2 == 0) return "Paper";
    else return "Scissors";
}


function playRound(humanChoice, computerChoice) {
    let human_choice = humanChoice.toLowerCase();
    let computer_choice = computerChoice.toLowerCase();
    if (human_choice === computer_choice) {
        console.log("It's a tie");
    }
    else if (human_choice === "rock" && computer_choice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if (computer_choice === "rock" && human_choice === "paper") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if (human_choice === "rock" && computer_choice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if (human_choice === "scissors" && computer_choice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else if (human_choice === "scissors" && computer_choice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else {
        console.log("You lose! Paper beats Scissors");
        computerScore++;
    }

}
function playGame() {
    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);
    if (humanScore > computerScore) {
        result.textContent = "You won the game!";
    } else if (humanScore < computerScore) {
        // console.log("Computer won the game!");
        result.textContent = "Computer won the game!";

    } else {
        // console.log("The game is tied!");
        result.textContent = "The game is tied!";
    }
}
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    rounds = 0;

    result.textContent = "Choose Rock, Paper or Scissors to start!";
}
const buttons = document.querySelectorAll(".choice");
const result = document.querySelector(".result");
const resetButton = document.querySelector("#reset");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        result.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
        console.log("Human:", humanScore);
        console.log("Computer:", computerScore);
        rounds++;
        if (humanScore === 5 || computerScore === 5) {
            playGame();
            // resetButton.style.display = "block";
            // resetGame();
            // resetButton.style.display = "none"; // Hide
            resetButton.style.display = "block";

            buttons.forEach(button => {
                button.disabled = true;
            });

        }
    });
});

resetButton.addEventListener("click", () => {
    resetGame();

    buttons.forEach(button => {
        button.disabled = false;
    });

    resetButton.style.display = "none";
});




