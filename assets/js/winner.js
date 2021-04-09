const endGamePopUp = document.getElementById("endGamePopUp");

const showEndGamePopUp = (cell) => {
    const playersName = getPlayersName();
    result.innerText = 'venceu e deixou a vila!';
    howard.src = '../lig-4/assets/img/sadHoward.png';

    if (cell === 1) {
        winner.innerText = `${playersName[1]} `;
    } else {
        winner.innerText = `${playersName[2]} `;
    }

    endGamePopUp.classList.remove('showUp');
    winAnimation();
    endGamePopUp.classList.add('showUp');

    setTimeout(() => {
        endGamePopUp.classList.remove("hidden");
    }, 5000);
};
