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
            for(let i=1;i<=3;i++){
                if (cell === gamePlay[indexRow][indexCol + i]){
                    countWinHorizontal++;
                }
            }

            if (countWinHorizontal===3) {
                showEndGamePopUp(cell);
            }
        }
    }
}


// const winHorizontal = gamePlay=>{
//     let edgeX = gamePlay[0].length-3;
//     gamePlay.forEach((row,indexRow)=>{
//         row.forEach((cell,indexCol)=>{
//             horizontalCondition(gamePlay,edgeX,indexRow,cell,indexCol);
//         })
//     })
// }