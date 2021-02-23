// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNumber(min, max),
  guessesLeft = 3;

// UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max number
minNum.textContent = min;
maxNum.textContent = max;

// Play again listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please a number between ${min} and ${max}`, "red");
  }

  // Check if won
  if (guess === winningNum) {
    // Game over - won
    gameOver(true, `${winningNum} is correct you won!`);
  } else {
    // Wrong number
    guessesLeft -= 1;

    if (guessesLeft <= 0) {
      // Game over - lost
      gameOver(
        false,
        `You're out of tries. The correct number was ${winningNum}.`
      );
    } else {
      //Game continues awnser wrong
      // Enable input
      guessInput.disabled = false;
      // Change border color
      guessInput.style.borderColor = "red";
      // Set message
      setMessage(
        `${guessInput.value} is the wrong number, you still have ${guessesLeft} tries.`,
        "red"
      );
      // Clear the input
      guessInput.value = "";
    }
  }
});

// Create error message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set message
  setMessage(msg, color);

  // Play again?
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

// Get winning number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}
