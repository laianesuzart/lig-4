// const winHorizontal = (gamePlay,rowPosition)=>{
//     let rowSelected = gamePlay[rowPosition];
//     let edgeX = gamePlay[0].length-3;
//
//     rowSelected.forEach((cell,index)=>{
//         if(index<edgeX && cell !== 0) {
//             if(
//                 (cell === rowSelected[index+1])
//                 &&
//                 (cell === rowSelected[index+2])
//                 &&
//                 (cell === rowSelected[index+3])
//             ) {
//                 console.log(`Player${cell} won Horizontal`);
//             }
//         }
//     })
// }

const horizontalCondition = (gamePlay,edgeX,indexRow,cell,indexCol)=>{

    if(cell !== 0) {
        if (indexCol < edgeX) {

            let countWinHorizontal = 0;
            arrayToscratch = [[indexRow,indexCol]];
            for(let i=1 ; i<= 3; i++) {
                let position = [];

                if (cell === gamePlay[indexRow][indexCol + i]){
                    countWinHorizontal++;

                    position.push(indexRow);
                    position.push(indexCol + i);
                }

                arrayToscratch.push(position);
            }

            if (countWinHorizontal===3) {
                victoryPositions = arrayToscratch;
                return true;
            }
        }
    }

    return false;
}


// const winHorizontal = gamePlay=>{
//     let edgeX = gamePlay[0].length-3;
//     gamePlay.forEach((row,indexRow)=>{
//         row.forEach((cell,indexCol)=>{
//             horizontalCondition(gamePlay,edgeX,indexRow,cell,indexCol);
//         })
//     })
// }