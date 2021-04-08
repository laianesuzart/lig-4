let savePositions = [];

const gameConditions =gamePlay=>{
    let edgeX = gamePlay[0].length - 3; //7-3=4
    let edgeY = gamePlay.length - 3; //6-3=3
    

    gamePlay.forEach((row, indexRow) => {
        row.forEach((cell, indexCol) => {
        let victory1 = verticalCondition(gamePlay,edgeY,indexRow,cell,indexCol);
        let victory2 = horizontalCondition(gamePlay,edgeX,indexRow,cell,indexCol);
        let victory3 = diagonalDownRightCondition(gamePlay,edgeX,edgeY,indexRow,cell,indexCol);
        let victory4 = diagonalDownLeftCondition(gamePlay,edgeX,edgeY,indexRow,cell,indexCol);

        if (victory1 || victory2 || victory3 || victory4) {
            showEndGamePopUp(cell);
        }
        })
    })
}




