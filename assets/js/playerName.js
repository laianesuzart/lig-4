const p1nameInput = document.getElementById('p1nameInput');
const p2nameInput = document.getElementById('p2nameInput');
const p1nameDisplay = document.getElementById('p1name');
const p2nameDisplay = document.getElementById('p2name');

const getPlayersName = () => {
    const player1Name = p1nameInput.value;
    const player2Name = p2nameInput.value;

    if (player1Name !== '') {
        p1nameDisplay.innerText = player1Name;
    }
    if (player2Name !== '') {
        p2nameDisplay.innerText = player2Name;
    }
}

selectedNamesBtn.addEventListener('click', getPlayersName);


// let chooseYourName = document.createElement("input")
// chooseYourName.style.height = "20px";
// chooseYourName.type = "text"
// chooseYourName.placeholder = "choose your player 1 nickname";
// chooseYourName.maxLength = "20"
// gameTableID.appendChild(chooseYourName)
// let submit = document.createElement("input");
// submit.type = "submit";
// submit.style.height = "20px"
// gameTableID.appendChild(submit)


// let chooseYourName2 = document.createElement("input")
// chooseYourName2.style.height = "20px";
// chooseYourName2.type = "text"
// chooseYourName2.placeholder = "choose your player 2 nickname";
// chooseYourName2.maxLength = "20"
// gameTableID.appendChild(chooseYourName2)
// let submit2 = document.createElement("input");
// submit2.type = "submit";
// submit2.style.height = "20px"
// gameTableID.appendChild(submit2)

// let currentPlayerName1 = "";
// let currentPlayerName2 = "";


// submit.addEventListener("click", () => {
//     currentPlayerName1 = chooseYourName.value;
//     console.log(currentPlayerName1)
//     submit.style.display = "none"
//     chooseYourName.style.display = "none"
// })

// submit2.addEventListener("click", () => {
//     currentPlayerName2 = chooseYourName2.value;
//     console.log(currentPlayerName2)
//     submit2.style.display = "none"
//     chooseYourName2.style.display = "none"
// })
