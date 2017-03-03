//Rock, Paper, Scissors
/*
var player1Choice = window.prompt("Rock, Paper, or Scissors?")
if (player1Choice !== "Rock" && player1Choice !== "Paper" && player1Choice !== "Scissors"){
    console.log("Enter a valid choice");
}

var computerChoice = Math.random();
console.log(computerChoice);
var computerPlay;

if (computerChoice >= 0 && computerChoice < 0.3333){
    computerPlay = "Rock";
}
else if (computerChoice >= 0.3333 && computerChoice < 0.6666){
    computerPlay = "Paper";
}
else if (computerChoice >= 0.6666 && computerChoice <= 1){
    computerPlay = "Scissors";
}
else{
    console.log("what happened?!? Enter 'Rock','Paper', or 'Scissors'");
}

console.log("Computer plays "+ computerPlay);

if (player1Choice == "Rock" && computerPlay == "Rock"){
    console.log("Tied. Play again!");
}
else if (player1Choice == "Rock" && computerPlay == "Paper"){
    console.log("Paper covers Rock. You lose.");
}
else if (player1Choice == "Rock" && computerPlay == "Scissors"){
    console.log("Rock smashes Scissors. You win!");
}
else if (player1Choice == "Paper" && computerPlay == "Rock"){
    console.log("Paper covers Rock. You win!");
}
else if (player1Choice == "Paper" && computerPlay == "Paper"){
    console.log("Tied.Play again!");
}
else if (player1Choice == "Paper" && computerPlay == "Scissors"){
    console.log("Scissors cut Paper. You lose!");
}
else if (player1Choice == "Scissors" && computerPlay == "Rock"){
    console.log("Rock smashes Scissors. You lose!");
}
else if (player1Choice == "Scissors" && computerPlay == "Paper"){
    console.log("Scissors cut Paper. You win!");
}
else if (player1Choice == "Scissors" && computerPlay == "Scissors"){
    console.log("Tied. Play again!");
}
else {
    console.log("Something went wrong. Play again and play the game right.");
}
*/

//The Basic Calculator


function calculate(saveNumber1, saveNumber2, operator){
    var saveNumber1 = window.prompt("Pick a number");

    var saveNumber2 = window.prompt("Pick another number");

    var operator = window.prompt("Select an operation: Add, Subtract, Mulitply, or Divide.");
    
    var intNumber1 = parseInt(saveNumber1);
    var intNumber2 = parseInt(saveNumber2);
    
    switch(operator){
        case "Add":
            window.alert(intNumber1 + intNumber2);
            break;
        case "Subtract":
            window.alert(intNumber1 - intNumber2);
            break;
        case "Multiply":
            window.alert(intNumber1 * intNumber2);
            break;
        case "Divide":
            window.alert(intNumber1 / intNumber2);
            break;
        default:
            window.alert("Try again and pick a valid operation");
            break;
            
    }
    
}

calculate();




