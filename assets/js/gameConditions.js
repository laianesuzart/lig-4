const gameConditions =gamePlay=>{
    let edgeX = gamePlay[0].length - 3; //7-3=4
    let edgeY = gamePlay.length - 3; //6-3=3

    gamePlay.forEach((row, indexRow) => {
        row.forEach((cell, indexCol) => {
            verticalCondition(gamePlay,edgeY,indexRow,cell,indexCol);
            horizontalCondition(gamePlay,edgeX,indexRow,cell,indexCol);
            diagonalDownRightCondition(gamePlay,edgeX,edgeY,indexRow,cell,indexCol);
            diagonalDownLeftCondition(gamePlay,edgeX,edgeY,indexRow,cell,indexCol);
        })
    })
}




