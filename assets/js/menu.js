const rulesBtn = document.getElementById('rulesBtn');
const audioBtn = document.getElementById('audioBtn');
const historyBtn = document.getElementById('historyBtn');
const popUp = document.getElementById('popUp');
const text = document.getElementById('text');
const exitBtn = document.getElementById('exitBtn');
const bgm = document.getElementById('bgm');
const volIcon = document.getElementById('volIcon');

rulesBtn.addEventListener('click', () => {
    text.innerText = 'Lig 4 é um jogo popular lançado pela empresa Milton Bradley Company (que foi adquirida pela Hasbro em 1984) em 1974, com o nome de "Connect Four". Neste jogo, os dois jogadores devem colocar as fichas estratégicamente na base, de forma a formar uma sequência com as 4 fichas da sua cor, ao mesmo tempo em que devem prestar atenção para bloquear as tentativas do oponente fazer o mesmo!';
    popUp.classList.toggle('hidden');
});

historyBtn.addEventListener('click', () => {
    text.innerText = 'Após a Grande Guerra Ninja, a vila de Konoha ficou devastada. Mas, graças ao grande Hokage Howard, foi possível reconstruir a vila em poucos meses. Além disso, sua incrível atuação na Guerra Ninja possibilitou salvar milhares de vidas, seu ninjutsu estilo água: Hsksjdh no Jutsu destruiu inimigos. Os habitantes de Konoha são tão gratos ao Hokage Howard que decidiram renomear sua vila para Howard Village.';
    popUp.classList.toggle('hidden');
});

exitBtn.addEventListener('click', () => {
    popUp.classList.add('hidden');
});

const isBgmPaused = () => bgm.paused;

audioBtn.addEventListener('click', () => {
    if (isBgmPaused()) {
        bgm.play();
        volIcon.classList.remove('fa-volume-off');
        volIcon.classList.add('fa-volume-up');
        
    } else {
        bgm.pause();
        volIcon.classList.remove('fa-volume-up');
        volIcon.classList.add('fa-volume-off');
    } 
});