let msg1 = document.getElementById("msg1");
let msg2 = document.getElementById("msg2");
let msg3 = document.getElementById("msg3");

var result = Math.floor(Math.random() * 10);
console.log(result);

var no_of_guess = 0;
var guessed_num = [];

function play() {
  let guess = document.getElementById("guess").value;
  if (guess < 1 || guess > 10) {
    alert("Please enter number between 1 to 10");
  } else {
    no_of_guess = no_of_guess + 1;
    guessed_num.push(guess);

    if (guess > result) {
      msg1.textContent = "your guess is low";
      msg2.textContent = "no of gamer guesses:" + no_of_guess;
      msg3.textContent = "Guessed numbers are:" + guessed_num;
    } else if (guess < result) {
      msg1.textContent = "your guess is high";
      msg2.textContent = "no of gamer guesses:" + no_of_guess;
      msg3.textContent = "Guessed numbers are:" + guessed_num;
    } else if (guess == result) {
      msg1.textContent = "congrats you win";
      msg2.textContent = "The lucky number is" + result;
      msg3.textContent = "Total" + no_of_guess+ "guesses";
    }
  }
  if (no_of_guess > 3) {
    msg1.textContent = "Your total chances are over";
    msg2.textContent = ""
    msg3.textContent = "";
  }
}
