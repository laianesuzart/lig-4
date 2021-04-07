// const winVertical = gamePlay => {
//   const edgeY = gamePlay.length - 3;
//
//   for(let y = 0; y < edgeY; y++){
//
//     for(let x = 0; x < gamePlay[0].length; x++) {
//       letter = gamePlay[y][x];
//       if(letter !== 0) {
//         if(
//           letter === gamePlay[y+1][x]
//           &&
//           letter === gamePlay[y+2][x]
//           &&
//           letter === gamePlay[y+3][x]
//           ) {
//           console.log(`${letter} won`);
//         }
//       }
//     }
//   }
// };

const verticalCondition = (gamePlay,edgeY,indexRow,cell,indexCol)=>{
    if (cell!==0) {
        if (indexRow < edgeY) {
            if (
                cell === gamePlay[indexRow + 1][indexCol]
                &&
                cell === gamePlay[indexRow + 2][indexCol]
                &&
                cell === gamePlay[indexRow + 3][indexCol]
            ) {
                endGamePopUp(cell);
            }
        }
    }
}

// const winVertical = gamePlay=>{
//     let edgeY = gamePlay.length - 3;
//
//     gamePlay.forEach((row,indexRow)=>{
//         row.forEach((cell,indexCol)=>{
//             verticalCondition(gamePlay,edgeY,indexRow,cell,indexCol)
//         })
//     })
// }