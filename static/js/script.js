// Random number
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Game variables
let attempts = 0;
let maxAttempts = 10;
let gameOver = false;

// Set difficulty
function setDifficulty(level) {

    if (level === "easy") {
        maxAttempts = 10;
    }
    else if (level === "medium") {
        maxAttempts = 7;
    }
    else {
        maxAttempts = 5;
    }

    restartGame();

    document.getElementById("maxAttempts").innerHTML = maxAttempts;

    document.getElementById("message").innerHTML =
        "Difficulty: " + level.toUpperCase();

    document.getElementById("message").className = "info";
}

// Check Guess
function checkGuess() {

    if (gameOver) return;

    let guess = Number(document.getElementById("guess").value);

    if (document.getElementById("guess").value === "") {
        document.getElementById("message").innerHTML =
            "Please enter a number!";
        return;
    }

    attempts++;

    document.getElementById("attempts").innerHTML = attempts;

    if (guess === randomNumber) {

        document.getElementById("message").innerHTML =
            "🎉 Congratulations! You guessed correctly!";

        document.getElementById("message").className = "success";

        gameOver = true;

        return;
    }

    if (attempts >= maxAttempts) {

        document.getElementById("message").innerHTML =
            "❌ Game Over! Number was <b>" + randomNumber + "</b>";

        document.getElementById("message").className = "error";

        gameOver = true;

        return;
    }

    if (guess < randomNumber) {

        document.getElementById("message").innerHTML =
            "📈 Too Low!";

        document.getElementById("message").className = "info";
    }

    else {

        document.getElementById("message").innerHTML =
            "📉 Too High!";

        document.getElementById("message").className = "info";
    }

    document.getElementById("guess").value = "";

    document.getElementById("guess").focus();
}

// Restart
function restartGame() {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    gameOver = false;

    document.getElementById("attempts").innerHTML = "0";

    document.getElementById("maxAttempts").innerHTML = maxAttempts;

    document.getElementById("guess").value = "";

    document.getElementById("message").innerHTML =
        "Start Guessing...";

    document.getElementById("message").className = "info";
}

// Enter Key Support
document.getElementById("guess").addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        checkGuess();
    }

});

// Show default attempts
window.onload = function () {
    document.getElementById("maxAttempts").innerHTML = maxAttempts;
};