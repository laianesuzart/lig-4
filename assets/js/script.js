let currentPlayer = 'player1';

const isColFull = (array) => {
    let output = false;

    if (array[0].childElementCount !== 0) {
        output = true;
    }
    return output;
}

const insertBall = (e) => {
    let col = e.currentTarget;

    if(!isColFull(col.children)) {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.classList.add(currentPlayer);
    
        for (let i = 0; i < col.children.length; i++) {
            let cell = col.children[i];
    
            if(cell.childElementCount === 0) {
                cell.appendChild(ball);
            }
        }
    
        if (currentPlayer === 'player1') {
            currentPlayer = 'player2';
        } else if (currentPlayer === 'player2') {
            currentPlayer = 'player1';
        }
    }

   
}

for (let i = 1; i <= 7; i++) {
    const col = document.querySelector(`.col[data-column="${i}"]`);
    col.addEventListener('click', insertBall);
}