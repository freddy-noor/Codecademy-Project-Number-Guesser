let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget () {
  return Math.floor(Math.random() * 10);
};

function compareGuesses (human, computer, target) {
  if (Math.abs(human - target) <= Math.abs(computer - target)) {
    return true
  } else if (Math.abs(human - target) >= Math.abs(computer - target)) {
    return false
  } else {
    return true
  }
};

function updateScore (winner) {
  if (winner === 'human') {
    humanScore++
  } else if (winner === 'computer') {
    computerScore++
  }
};

function advanceRound () {
  return currentRoundNumber++
};

updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1
