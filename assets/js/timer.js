const timer = document.getElementById("timer");
let timeID;
const setTimer = (counter) => {
    timeID = setTimeout(() => {
        timer.innerHTML = `${counter}`;
        counter--;
        setTimer(counter);
    }, 1000)
    if (counter === 0) {
        currentPlayer = changePlayer(currentPlayer);
        clearTimeout(timeID);
        counter = 15;
        setTimer(counter);
        setTimeout(() => {
            changeTurn();
        }, 1000);
    }
    return timeID;
}