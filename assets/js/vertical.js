const winVertical = gamePlay => {
  const edgeY = gamePlay.length - 3;

  for(let y = 0; y < edgeY; y++){

    for(let x = 0; x < gamePlay[0].length; x++) {
      letter = gamePlay[y][x];
      if(letter !== 0) {
        if(
          letter === gamePlay[y+1][x]
          &&
          letter === gamePlay[y+2][x]
          &&
          letter === gamePlay[y+3][x]
          ) {
          console.log(`${letter} won`);
        }
      }
    }
    
  }

};