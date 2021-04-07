const dropSounds = {
    player1: new Audio('../assets/audio/shuriken.mp3'),
    player2: new Audio('../assets/audio/kunai.mp3')
}

for (let audio in dropSounds) {
   dropSounds[audio].volume = 0.2;
}

const playSound = audio => audio.play();