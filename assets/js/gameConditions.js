let arrayToscratch = [];

const gameConditions = gamePlay => {
    let edgeX = gamePlay[0].length - 3; //7-3=4
    let edgeY = gamePlay.length - 3; //6-3=3

    gamePlay.forEach((row, indexRow) => {
        row.forEach((cell, indexCol) => {

            let winVertical = verticalCondition(gamePlay,edgeY,indexRow,cell,indexCol);
            let winHorizontal = horizontalCondition(gamePlay,edgeX,indexRow,cell,indexCol);
            let winDiagonalRight = diagonalDownRightCondition(gamePlay,edgeX,edgeY,indexRow,cell,indexCol);
            let winVerticalLeft = diagonalDownLeftCondition(gamePlay,edgeX,edgeY,indexRow,cell,indexCol);
            
            if (winVertical || winHorizontal || winDiagonalRight || winVerticalLeft) {
                endGamePopUp(cell);
            }

        })
    })
}




