// const winDiagonal = gamePlay => {
//   const edgeX = gamePlay[0].length - 3; //7-3=4
//   const edgeY = gamePlay.length - 3; //6-3=3
//
//   for (let y = 0; y < edgeY; y++) {
//     for (let x = 0; x < edgeX; x++) {
//       let letter = gamePlay[y][x];
//       if (letter !== 0) {
//         if (
//           letter === gamePlay[y + 1][x + 1]
//           &&
//           letter === gamePlay[y + 2][x + 2]
//           &&
//           letter === gamePlay[y + 3][x + 3]
//         ) {
//           console.log(`${letter} won`);
//         }
//       }
//     }
//   }
//
//   for (let y = 3; y < gamePlay.length; y++) {
//     for (let x = 0; x < edgeX; x++) {
//       let letter = gamePlay[y][x];
//       if (letter !== 0) {
//         if (
//           letter === gamePlay[y - 1][x + 1]
//           &&
//           letter === gamePlay[y - 2][x + 2]
//           &&
//           letter === gamePlay[y - 3][x + 3]
//         ) {
//           console.log(`${letter} won`);
//         }
//       }
//     }
//   }
// };

const diagonalDownRightCondition = (gamePlay,edgeX,edgeY,indexRow,cell,indexCol)=>{
    if (cell !== 0) {
        if (indexRow < edgeY && indexCol < edgeX) { //3 e 4
            if (
                cell === gamePlay[indexRow + 1][indexCol + 1]
                &&
                cell === gamePlay[indexRow + 2][indexCol + 2]
                &&
                cell === gamePlay[indexRow + 3][indexCol + 3]
            ) {
                console.log(`Player${cell} won diagonal`);
            }
        }
    }
}

const diagonalDownLeftCondition = (gamePlay,edgeX,edgeY,indexRow,cell,indexCol)=>{
    if (cell !== 0) {
        if (indexRow >= edgeY && indexRow < gamePlay.length && indexCol < edgeX) { //>3 <6 <4
            if (
                cell === gamePlay[indexRow - 1][indexCol + 1]
                &&
                cell === gamePlay[indexRow - 2][indexCol + 2]
                &&
                cell === gamePlay[indexRow - 3][indexCol + 3]
            ) {
                console.log(`Player${cell} won diagonal`);
            }
        }
    }
}

// const winDiagonal = gamePlay => {
//     let edgeX = gamePlay[0].length - 3; //7-3=4
//     let edgeY = gamePlay.length - 3; //6-3=3
//
//     gamePlay.forEach((row, indexRow) => {
//         row.forEach((cell, indexCol) => {
//             diagonalDownRightCondition(gamePlay,edgeX,edgeY,indexRow,cell,indexCol);
//             diagonalDownLeftCondition(gamePlay,edgeX,edgeY,indexRow,cell,indexCol);
//         })
//     })
// }

