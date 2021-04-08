const horizontalCondition = (gamePlay, edgeX, indexRow, cell, indexCol) => {

    if (cell !== 0) {

        if (indexCol < edgeX) {
            let countWinHorizontal = 0;
            let position = [];
            let sameBall = 3;
            savePositions = [[indexRow, indexCol]];

            for (let i = 1; i <= sameBall; i++) {
                position = [];

                if (cell === gamePlay[indexRow][indexCol + i]) {
                    countWinHorizontal++;
                    position.push(indexRow);
                    position.push(indexCol + i);
                }

                savePositions.push(position);
            }

            if (countWinHorizontal === sameBall) {
                positions = savePositions;
                
                return true;
            }
        }
    }

    return false;
};