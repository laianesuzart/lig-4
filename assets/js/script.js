let currentPlayer = 'player1';

const changePlayer = () => {
    if (currentPlayer === 'player1') {
        currentPlayer = 'player2';
    } else if (currentPlayer === 'player2') {
        currentPlayer = 'player1';
    }
}

const isColNotFull = node => {
    if (node.firstElementChild.childElementCount === 0) {
        return true;
    }
    return false;
}

const makeBall = () => {
    const ball = document.createElement('div');
    ball.classList.add('ball', currentPlayer);
    return ball;
}

const insertBall = e => {
    let col = e.currentTarget;

    if(isColNotFull(col)) {
        const ball = makeBall();
        for (let i = 0; i < col.children.length; i++) {
            let cell = col.children[i];
            if(cell.childElementCount === 0) {
                cell.appendChild(ball);
            }
        }
        changePlayer();
    }
}

const columns = document.querySelectorAll(".col");
columns.forEach((current) => {
    current.addEventListener('click', insertBall);
});