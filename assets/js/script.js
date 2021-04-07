let currentPlayer = 'player1';

let gamePlay = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]

const changePlayer = () => {
    if (currentPlayer === 'player1') {
        currentPlayer = 'player2';
    } else if (currentPlayer === 'player2') {
        currentPlayer = 'player1';
    }
}

const isColNotFull = node => node.firstElementChild.childElementCount === 0;

const makeBall = () => {
    const ball = document.createElement('div');
    ball.classList.add('ball', currentPlayer);
    return ball;
}

// let rowPosition = 0;
// let colPosition = 0;
let count = 0;
const insertBall = e => {
    let rowPosition = 0;
    let colPosition = 0;
    let col = e.currentTarget;
    colPosition = col.dataset.column;
    let colChildArray = Array.from(col.children)

    if(isColNotFull(col)) {
        const ball = makeBall();
        playSound(dropSounds[currentPlayer]);
        
        colChildArray.forEach((cell,index)=>{
            if (cell.childElementCount === 0) {
                cell.appendChild(ball);
                rowPosition = index;
            }
        });

        if(currentPlayer === "player1"){
            gamePlay[rowPosition][colPosition-1] = 1;
        }else if(currentPlayer === "player2"){
            gamePlay[rowPosition][colPosition-1] = 2;
        }

        gameConditions(gamePlay);
        count = gameDraw(count);
        changePlayer();
        clearTimeout(timeID)
        setTimer(15)
    }
}

let columns = document.querySelectorAll(".col");
columns.forEach((current) => {
    current.addEventListener('click', insertBall);
});
