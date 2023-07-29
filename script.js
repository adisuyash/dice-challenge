// For Dice 1
let diceOne = Math.floor(Math.random() * 6 + 1);
let diceOneImage = "../images/dice" + diceOne + ".png";
document.querySelectorAll("img")[0].setAttribute("src", diceOneImage);

// For Dice 2
let diceTwo = Math.floor(Math.random() * 6 + 1);
let diceTwoImage = "../images/dice" + diceTwo + ".png";
document.querySelectorAll("img")[1].setAttribute("src", diceTwoImage);

if (diceOne === diceTwo) {
    document.querySelector("h3").innerHTML = "Match Draw";
}
else if (diceOne > diceTwo) {
    document.querySelector("h3").innerHTML = "Player 1 wins";
    // Player1 wins ;
}
else {
    document.querySelector("h3").innerHTML = "Player 2 wins";
    // Player2 wins ;
}
function refreshPage() {
    window.location.reload();
}
