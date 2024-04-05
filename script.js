let currentPlayer = 'X';
let arr = Array(9).fill(null);
const elem = document.getElementById('res');
let ass = false;
function handleClick(el) {
    if(ass == true) return;
    const id = Number(el.id);
    if (arr[id] !== null) return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    el.style.color = currentPlayer === 'X' ? 'black' : 'blue';
    const winner = checkWinner();
    if (winner !== null) {
        displayResult(winner + " Wins");
        ass = true;
    } else if (!arr.includes(null)) {
        displayResult("Draw");
        ass = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]              // diagonals
    ];
    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            return arr[a]; // Returns the winner's symbol
        }
    }
    return null; // No winner yet
}

function displayResult(message) {
    const resultElement = document.createElement('h1');
    resultElement.innerText = message;
    elem.appendChild(resultElement);
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Restart';
    restartButton.addEventListener('click', function () {
        location.reload();
    });
    elem.appendChild(restartButton);
}
