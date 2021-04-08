const verticalCondition = (gamePlay, edgeY, indexRow, cell, indexCol) => {

    if (cell!==0) {

        if (indexRow < edgeY) {
            let countWinVertical = 0;
            savePositions = [[indexRow, indexCol]];
            let position = [];
            let sameBall = 3;

            for(let i = 1; i <= sameBall; i++) {
                position = [];

                if(cell === gamePlay[indexRow + i][indexCol]){
                    countWinVertical++
                    position.push(indexRow + i);
                    position.push(indexCol);
                }

                savePositions.push(position);
            }

            if(countWinVertical === sameBall){
                positions = savePositions;

                return true;
            }

        }
    }

    return false;
};