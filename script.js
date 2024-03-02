// console.log("hello");

function getComputerChoice (){
    let rand = Math.floor(Math.random() * 3);
    // console.log(rand);
    if(rand === 0){
        return "rock";
    }else if(rand === 1){
        return "paper";
    }else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let player_win = (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper");

    let player_tie = playerSelection === computerSelection;

    if(player_win){
        return `Player win! player was ${playerSelection} and computer was ${computerSelection}`;
    }else if(player_tie){
        return `Player ties with computer! player was ${playerSelection} and computer was ${computerSelection}`;
    }{
        return `Player loses! player was ${playerSelection} and computer was ${computerSelection}`;
    }
}

function playGame(){

    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("what is your choice? (options are rock/paper/scissors)");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

}
playGame();
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
  

