const columns = document.querySelectorAll(".col");
let positions = [];

let currentPlayer = 'player1';
let playCount = 0;
let gamePlay = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
];

const isColNotFull = (node) => node.firstElementChild.childElementCount === 0;

const makeBall = (currentPlayer) => {
    const ball = document.createElement('div');
    ball.classList.add('ball', currentPlayer);
    return ball;
};

const insertBallRowPosition = (colChildArray, currentPlayer) => {
    let rowPosition = 0;
    const ball = makeBall(currentPlayer);
    playSound(dropSounds[currentPlayer]);

    colChildArray.forEach((cell, index) => {
        if (cell.childElementCount === 0) {
            cell.appendChild(ball);
            rowPosition = index;
        }
    });

    return rowPosition;
};

const updateGamePlay = (gamePlay, currentPlayer, rowPosition, colPosition) => {

    if (currentPlayer === "player1") {
        gamePlay[rowPosition][colPosition - 1] = 1;
    } else {
        gamePlay[rowPosition][colPosition - 1] = 2;
    }

    return gamePlay;
};


const changePlayer = (currentPlayer) => {
    if (currentPlayer === 'player1') {
        currentPlayer = 'player2';
    } else {
        currentPlayer = 'player1';
    }

    return currentPlayer;
};

const mainGame = (e) => {
    let col = e.currentTarget;
    let colChildArray = Array.from(col.children);
    let colPosition = col.dataset.column;
    
    if(isColNotFull(col)) {
        let rowPosition = insertBallRowPosition(colChildArray, currentPlayer);
        gamePlay = updateGamePlay(gamePlay, currentPlayer, rowPosition, colPosition);
        gameConditions(gamePlay);
        playCount = gameDraw(playCount);
        currentPlayer = changePlayer(currentPlayer);

        clearTimeout(timeID);
        setTimer(15);
        setTimeout(() => {
            changeTurn();
        }, 1000);
    }
};

columns.forEach((current) => {
    current.addEventListener('click', mainGame);
});