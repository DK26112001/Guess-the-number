let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textoutput");
let userNumberUpdate = document.getElementById("inputBox");
let maxGuess;
let audio = new Audio('./music/beep-01a.mp3');

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
    maxGuess = 0;
};

const startGame = () => {
    document.getElementById("WelcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
};

const startNewGame = () => {
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled", true);
};

const compareGuess = () => {
    const userNumber = Number(userNumberUpdate.value);
    userGuess.push(userNumber);
    document.getElementById("guesses").innerHTML = userGuess.join(', ');

    // Play the beep sound
    audio.play();

    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is high";
            userNumberUpdate.value = "";
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is low";
            userNumberUpdate.value = "";
        } else {
            userGuessUpdate.innerHTML = "Congratulations! It's the correct guess";
            userNumberUpdate.value = "";
        }
    } else {
        userGuessUpdate.innerHTML = `You lose!! Correct number is ${computerGuess}`;
        userNumberUpdate.value = "";
        startNewGame();
    }

    document.getElementById("attempts").innerHTML = userGuess.length;
};

const easymode = () => {
    maxGuess = 10;
    startGame();
};

const hardmode = () => {
    maxGuess = 5;
    startGame();
};

// Function to handle "Enter" key press
const handleKeyPress = (event) => {
    if (event.key === "Enter") {
        compareGuess();
    }
};

// Call the init function on page load
init();

// Event listener for "Enter" key press
userNumberUpdate.addEventListener("keypress", handleKeyPress);
