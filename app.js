// Get elements
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
const result = document.querySelector('.result > p');
const choices = document.querySelectorAll('.choices img');
const history = document.querySelector('.history');

let userScoreCount = 0;
let computerScoreCount = 0;

// Generate computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

// Determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "It's a draw!";
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        userScoreCount++;
        userScore.textContent = userScoreCount;
        return "You Win!";
    } else {
        computerScoreCount++;
        computerScore.textContent = computerScoreCount;
        return "You Lose!";
    }
}

// Update history
function updateHistory(userChoice, computerChoice, outcome) {
    const entry = document.createElement('p');
    entry.textContent = `${userChoice} vs ${computerChoice}: ${outcome}`;
    history.appendChild(entry);
}

// Main function to play the game
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.alt.toLowerCase();
        const computerChoice = getComputerChoice();
        const outcome = determineWinner(userChoice, computerChoice);

        result.textContent = `${userChoice} vs ${computerChoice}... ${outcome}`;
        updateHistory(userChoice, computerChoice, outcome);

        // Add animation
        choice.classList.add('animate');
        setTimeout(() => {
            choice.classList.remove('animate');
        }, 500);
    });
});
