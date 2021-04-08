const p1nameInput = document.getElementById('p1nameInput');
const p2nameInput = document.getElementById('p2nameInput');
const p1nameDisplay = document.getElementById('p1name');
const p2nameDisplay = document.getElementById('p2name');

const getPlayersName = () => {
    const player1Name = p1nameInput.value.trim();
    const player2Name = p2nameInput.value.trim();
    const playersName = [''];

    if (player1Name !== '') {
        p1nameDisplay.innerText = player1Name;
        playersName.push(player1Name);
    }

    if (player2Name !== '') {
        p2nameDisplay.innerText = player2Name;
        playersName.push(player2Name);
    }

    return playersName;
};

selectedNamesBtn.addEventListener('click', getPlayersName);