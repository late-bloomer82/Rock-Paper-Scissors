//Function that gets the computer to make a random choice between rock papers and scissors
function getComputerChoice() {
    //Creating an array that contains all possible choices
    const words = ["Rock", "Paper", "Scissors"];

    //Creating an index randomizer to choose between the three words
    let randomIndexGenerator = Math.floor(Math.random() * words.length)

    //Acessing the random element inside my initial array and returning it
    let choice = words[randomIndexGenerator]
    return choice;
}

console.log(getComputerChoice())