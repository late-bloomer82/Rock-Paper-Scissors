
//Creating an array that contains all possible choices and that can be accessed from anywhere
const words = ["Rock", "Paper", "Scissors"];


//Function that gets the computer to make a random choice between rock papers and scissors
function getComputerChoice() {


    //Creating an index randomizer to choose between the three words
    let randomIndexGenerator = Math.floor(Math.random() * words.length)

    //Acessing the random element inside my initial array and returning it
    let choice = words[randomIndexGenerator]
    return choice;
}

//Declaring two variables representing the game score.
 let playerWinCount= 0;
 let computerWinCount= 0;

 let rock = "Rock";
 let paper = "Paper";
 let scissors = "Scissors";
 


 function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Make your choice : ")

    //There should be 9 different combinations possible.

    //Rock vs Rock
    if (playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection === words[0]) {
        console.log("Draw, both players chose Rock.")

    }
    //Paper vs Paper
    else if (playerSelection.toLowerCase() === paper.toLowerCase() && computerSelection === words[1]) {
        console.log("Draw, both players chose Paper.")

    }
    //Scissors vs Scissors
    else if (playerSelection.toLowerCase() === scissors.toLowerCase() && computerSelection === words[2]) {
        console.log("Draw, both players chose Scissors.")

    }
    //PLayer Rock vs Paper
    else if (playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection === words[1]) {
        console.log("You lose! Computer chose Paper.")
        computerWinCount++

    }
    // Player Rock vs Scissors
    else if (playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection === words[2]) {
        console.log("You win this round! Computer chose Scissors.")
        playerWinCount++
    }
    //Player Paper vs Rock
    else if (playerSelection.toLowerCase() ===paper.toLowerCase() && computerSelection === words[0]) {
        console.log("You win! Computer chose Rock")
        playerWinCount++
    }
    //Player Paper vs Scissors
    else if (playerSelection.toLowerCase() === paper.toLowerCase() && computerSelection === words[2]) {
        console.log("You lose! Computer chose Scissors.")
        computerWinCount++
    }
    //Player Scissors vs Rock
    else if (playerSelection.toLowerCase() === scissors.toLowerCase() && computerSelection === words[0]) {
        console.log("You lose! Computer chose Rock.")
        computerWinCount++
    }
    //Player Scissors vs Paper
    else if (playerSelection.toLowerCase() === scissors.toLowerCase() && computerSelection === words[1]) {
        console.log("You win! Computer chose Paper.")
        playerWinCount++

    }
    else {
        
        console.log("Invalid input. Please choose between Rock, Paper or Scissors.")
    }

    console.log("Player : " + playerWinCount)
    console.log("Computer : " + computerWinCount)
    

}

function game() {
    for (i = 0; i < 5; i++) {
        playRound()
        
        if(i==4 && computerWinCount >= playerWinCount){
            console.log("Unlucky! Computer wins.")

        }

        else if(i==4 && computerWinCount <= playerWinCount){
            console.log("Congratulations! You win.")
        }
        else if(i==4 && computerWinCount === playerWinCount){
            console.log("Wow! Game ends in a draw.")
        }
        
    }
}
alert("Let's play a Rock Paper Scissors game!")
game();


