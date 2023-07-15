
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
 let resultsDiv = document.querySelector(".results");
 let endgameDiv = document.querySelector(".endgame");


 

 function playRound(){




 rockButton.addEventListener("click", function(){
    if(getComputerChoice() === words[0]){
      
        resultsDiv.innerHTML = "Draw!" + "<br>Player : " + playerWinCount  + "<br>Computer : " + computerWinCount
    }
    if(computerWinCount === 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML= "Unlucky! Computer wins."
       
       
    

    }
    else if(playerWinCount===5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML = "You win!"
    }
        

 })
 rockButton.addEventListener("click", function(){
    if(getComputerChoice() === words[1]){
        computerWinCount++
        resultsDiv.innerHTML ="You lose! Computer picked paper." + "<br>Player : " + playerWinCount  + "<br>Computer : " + computerWinCount
        
    }
    if(computerWinCount === 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML= "Unlucky! Computer wins."
        

    }
    else if(playerWinCount===5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML = "You win!"
    }

 })
 rockButton.addEventListener("click", function(){
    if(getComputerChoice() === words[2]){
        playerWinCount++
        resultsDiv.innerHTML = "You win! Computer picked scissors." + "<br>Player : " + playerWinCount  + "<br>Computer : " + computerWinCount
      
    }
    if(computerWinCount === 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML= "Unlucky! Computer wins."

    }
    else if(playerWinCount===5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML = "You win!"
    }

 })
 paperButton.addEventListener("click", function(){
    if(getComputerChoice() === words[0]){
        playerWinCount++
        resultsDiv.innerHTML ="You win! Computer picked rock." + "<br>Player : " + playerWinCount  + "<br>Computer : " + computerWinCount
       
    }
    if(computerWinCount === 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML= "Unlucky! >bComputer wins."

    }
    else if(playerWinCount===5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML = "You win!"
    }

 })

paperButton.addEventListener("click", function(){
    if(getComputerChoice() === words[1]){
        
        resultsDiv.innerHTML = "Draw!" + "<br>Player : " + playerWinCount  + "<br>Computer : " + computerWinCount
    
    }
    if(computerWinCount === 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML= "Unlucky! Computer wins."

    }
    else if(playerWinCount===5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML = "You win!"
    }

})
paperButton.addEventListener("click", function(){
    if(getComputerChoice() === words[2]){
        computerWinCount++
        resultsDiv.innerHTML ="You lose! Computer picked scissors." + "<br>Player : " + playerWinCount  + "<br>Computer : " + computerWinCount
        
    }
    if(computerWinCount === 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML= "Unlucky! Computer wins."
       

    }
    else if(playerWinCount===5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML = "You win!"
        
    }

})

scissorsButton.addEventListener("click", function(){
    if(getComputerChoice() === words[0]){
        computerWinCount++
        resultsDiv.innerHTML = "You lose! Computer picked rock." + "<br>Player : " + playerWinCount  + "<br>Computer : " + computerWinCount
    }
    if(computerWinCount === 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML= "Unlucky! Computer wins."
        

    }
    else if(playerWinCount===5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML = "You win!"
    
    }
})

scissorsButton.addEventListener("click", function(){
    if(getComputerChoice() === words[1]){
        playerWinCount++
        resultsDiv.innerHTML ="You win! Computer picked paper." + "<br>Player : " + playerWinCount  + "<br>Computer : " + computerWinCount
        
    }
    if(computerWinCount === 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML= "Unlucky! Computer wins."
        
    }
    else if(playerWinCount===5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML = "You win!"
    }
        
})

scissorsButton.addEventListener("click", function(){
    if(getComputerChoice() === words[2]){
        
        resultsDiv.innerHTML = "Draw!" + "<br>Player : " + playerWinCount  + "<br>Computer : " + computerWinCount
        
    }
    if(computerWinCount === 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML= "Unlucky! Computer wins."
        

    }
    else if(playerWinCount===5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return endgameDiv.innerHTML = "You win!"
        
    }
})

}


playRound()


   
    

  

  

    
 
   




        
        
    

alert("Let's play a Rock Paper Scissors game!")



