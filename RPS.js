//Function that gets the computer to make a random choice between rock papers and scissors
//Creating an array that contains all possible choices and that can be accessed from anywhere
const words = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {


    //Creating an index randomizer to choose between the three words
    let randomIndexGenerator = Math.floor(Math.random() * words.length)

    //Acessing the random element inside my initial array and returning it
    let choice = words[randomIndexGenerator]
    return choice;
}

 let playerWinCount;
 let computerWinCount


 function playRound(getComputerSelection, getPlayerSelection) {
    getComputerSelection(getComputerChoice);
    getPlayerSelection = prompt("Make your choice : ")

    //There should be 9 different combinations possible.

    //Rock vs Rock
    if (getPlayerSelection === words[0] && getComputerSelection === words[0]) {
        console.log("Draw, both players chose Rock.")

    }
    //Paper vs Paper
    if (getPlayerSelection === words[1] && getComputerSelection === words[1]) {
        console.log("Draw, both players chose Paper.")

    }
    //Scissors vs Scissors
    if (getPlayerSelection === words[2] && getComputerSelection === words[2]) {
        console.log("Draw, both players chose Scissors.")

    }
    //PLayer Rock vs Paper
    if (getPlayerSelection === words[0] && getComputerSelection === words[1]) {
        console.log("You lose! Computer chose Paper.")
        computerWinCount++

    }
    // Player Rock vs Scissors
    if (getPlayerSelection === words[0] && getComputerSelection === words[2]) {
        console.log("You win! Computer chose Scissors.")
        playerWinCount++
    }
    //Player Paper vs Rock
    if (getPlayerSelection === words[1] && getComputerSelection === words[0]) {
        console.log("You win! Computer chose Rock")
        playerWinCount++
    }
    //Player Paper vs Scissors
    if (getPlayerSelection === words[1] && getComputerSelection === words[2]) {
        console.log("You lose! Computer chose Scissors.")
        computerWinCount++
    }
    //Player Scissors vs Rock
    if (getPlayerSelection === words[2] && getComputerSelection === words[0]) {
        console.log("You lose! Computer chose Rock.")
        computerWinCount++
    }
    //Player Scissors vs Paper
    if (getPlayerSelection === words[2] && getComputerSelection === words[1]) {
        console.log("You win! Computer chose Paper.")
        playerWinCount++

    }

    console.log(playerWinCount)
    console.log(computerWinCount)
    
    

}

function game() {
    for (i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice, getPlayerSelection))
        if(computerWinCount ==5){
            console.log("Computer wins.")

        }
        if(p==5){
            console.log("Player One wins!")
        }
    }
}


