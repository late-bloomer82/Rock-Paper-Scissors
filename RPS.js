
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
 
 let rockButton = document.getElementById("Rock");
 let paperButton = document.getElementById("Paper");
 let scissorsButton = document.getElementById("Scissors");
 let resultsDiv = document.querySelector(".results")

 //Rock vs Rock
 rockImage.addEventListener("click", function(){
    if(getComputerChoice === words[0]){
        resultsDiv.textContent = "Draw! You both chose rock."
    }

 })
 rockImage.addEventListener("click", function(){
    if(getComputerChoice === words[1]){
        resultsDiv.textContent = "You lose! Player 2 picked paper."
    }

 })
 rockImage.addEventListener("click", function(){
    if(getComputerChoice === words[2]){
        resultsDiv.textContent = "You win! Player 2 picked scissors."
    }

 })
 rockImage.addEventListener("click", function(){
    if(getComputerChoice === words[0]){
        resultsDiv.textContent = "Draw! You both chose paper."
    }

 })

 function playRound() {
    
    

  

  

    
    
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
// alert("Let's play a Rock Paper Scissors game!")
// game();


