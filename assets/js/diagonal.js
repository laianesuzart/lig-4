const winDiagonal = gamePlay => {
  const edgeX = gamePlay[0].length - 3;
  const edgeY = gamePlay.length - 3;

  for (let y = 0; y < edgeY; y++) {
    for (let x = 0; x < edgeX; x++) {
      let letter = gamePlay[y][x];
      if (letter !== 0) {
        if (
          letter === gamePlay[y + 1][x + 1]
          &&
          letter === gamePlay[y + 2][x + 2]
          &&
          letter === gamePlay[y + 3][x + 3]
        ) {
          console.log(`${letter} won`);
        }
      }
    }
  }

  for (let y = 3; y < gamePlay.length; y++) {
    for (let x = 0; x < edgeX; x++) {
      let letter = gamePlay[y][x];
      if (letter !== 0) {
        if (
          letter === gamePlay[y - 1][x + 1]
          &&
          letter === gamePlay[y - 2][x + 2]
          &&
          letter === gamePlay[y - 3][x + 3]
        ) {
          console.log(`${letter} won`);
        }
      }
    }
  }

};