const shurikenSound = document.getElementById('shurikenSound');
const kunaiSound = document.getElementById('kunaiSound');

const dropSounds = {
    player1: shurikenSound,
    player2: kunaiSound
}

for (let audio in dropSounds) {
   dropSounds[audio].volume = 0.8;
}

const playSound = audio => audio.play();