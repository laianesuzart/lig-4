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

const howard = document.getElementById('howard');
const result = document.getElementById("result");
const winner = document.getElementById("winner");

const gameDraw = (playCount) => {

    if (playCount === 41) {
        endGamePopUpDraw();
    } else {
        playCount++;
    }

    return playCount;
};

const endGamePopUpDraw = () => {
    endGamePopUp.classList.remove('showUp');
    winner.innerText = '';
    howard.src = '../assets/img/happyHoward.png';
    result.innerText = "Derrotados pelo Hokage Howard! Mwahaha";
    drawAnimation();
    endGamePopUp.classList.add('showUp');
    setTimeout(() => {
        endGamePopUp.classList.remove("hidden");
    }, 5000);  
};
