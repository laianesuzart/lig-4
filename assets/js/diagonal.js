const diagonalDownRightCondition = (gamePlay,edgeX,edgeY,indexRow,cell,indexCol) => {

    if (cell !== 0) {

        if (indexRow < edgeY && indexCol < edgeX) {
            let countWinDiagonalDownRight = 0;
            
            savePositions = [[indexRow, indexCol]];
            let position = [];
            let sameBall = 3;

            for (let i = 1; i <= sameBall; i++) {
                position = [];

                if (cell === gamePlay[indexRow + i][indexCol + i]){
                    countWinDiagonalDownRight++;

                    position.push(indexRow + i);
                    position.push(indexCol + i);
                }

                savePositions.push(position);
            }

            if (countWinDiagonalDownRight === sameBall) {
                positions = savePositions;

                return true;
            }
        }
    }

    return false;
};

const diagonalDownLeftCondition = (gamePlay,edgeX,edgeY,indexRow,cell,indexCol) => {

    if (cell !== 0) {

        if (indexRow >= edgeY && indexRow < gamePlay.length && indexCol < edgeX) {
            let countDiagonalDownLeft = 0;
            savePositions = [[indexRow, indexCol]];
            let position = [];
            let sameBall = 3;

            for(let i = 1; i <= sameBall; i++) {
                position = [];

                if (cell === gamePlay[indexRow - i][indexCol + i]) {
                    countDiagonalDownLeft++;

                    position.push(indexRow - i);
                    position.push(indexCol + i);
                }

                savePositions.push(position);
            }

            if (countDiagonalDownLeft === sameBall) {
                positions = savePositions;

                return true;
            }
        }
    }

    return false;
};