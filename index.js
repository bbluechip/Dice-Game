/*  Using with names.(not recommended)
//Generating names as an input via using prompt.
var playerOne = prompt("Player1 name: ");
var playerTwo = prompt("Player2 name: ");

//Changing inside the html names via using DOM.
document.querySelectorAll("p")[0].innerHTML = playerOne;
document.querySelectorAll("p")[1].innerHTML = playerTwo;
*/
//generating dice numbers with math.random()
var diceNumberOne = Math.floor(Math.random() * 6) + 1;
var diceNumberTwo = Math.floor(Math.random() * 6) + 1;

//adding these numbers to find related images
var numbersToDiceOne = "images\\" + "dice" + diceNumberOne + ".png"; //images\dice2.png
var numbersToDiceTwo = "images\\" + "dice" + diceNumberTwo + ".png";

//select image attributes from HTML by using DOM.
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

//changing dice image via using DOM.
image1.setAttribute("src", numbersToDiceOne);
image2.setAttribute("src", numbersToDiceTwo);

if (diceNumberOne > diceNumberTwo) {
    document.querySelector("h1").innerHTML = "🏁Player1Win";
}
else if (diceNumberTwo > diceNumberOne){
    document.querySelector("h1").innerHTML = "Player2Win🏁";
}
else{
    document.querySelector("h1").innerHTML = "DRAW";
}

