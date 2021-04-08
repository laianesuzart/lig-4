const turnIcon = document.getElementById('turnIcon');

const changeTurn = () => {
    if (currentPlayer === 'player1') {
        turnIcon.classList.remove('turnRight');
        turnIcon.classList.add('turnLeft');
    } else {
        turnIcon.classList.remove('turnLeft');
        turnIcon.classList.add('turnRight');
    }
};