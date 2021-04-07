const rulesBtn = document.getElementById('rulesBtn');
const audioBtn = document.getElementById('audioBtn');
const volIcon = document.getElementById('volIcon');
const historyBtn = document.getElementById('historyBtn');
const popUp = document.getElementById('popUp');
const text = document.getElementById('text');
const exitBtn = document.getElementById('exitBtn');
const bgm = document.getElementById('bgm');
const hoverBip = document.getElementById('hoverBip');
const mainPanel = document.getElementById('mainPanel');
const chooseNamesBtn = document.getElementById('chooseNamesBtn');
const startBtn = document.getElementById('startBtn');
const chooseNames = document.getElementById('chooseNames');
const selectedNamesBtn = document.getElementById('selectedNamesBtn');

bgm.volume = 0.3;
hoverBip.volume = 0.2;

const isBgmPaused = () => bgm.paused;

const playBip = () => hoverBip.play();
   
rulesBtn.addEventListener('click', () => {
    text.innerText = 'Lig 4 é um jogo popular lançado pela empresa Milton Bradley Company (que foi adquirida pela Hasbro em 1984) em 1974, com o nome de "Connect Four". Neste jogo, os dois jogadores devem colocar as fichas estratégicamente na base, de forma a formar uma sequência com as 4 fichas da sua cor - seja na horizontal, na vertical ou mesmo na diagonal - ao mesmo tempo em que devem prestar atenção para bloquear as tentativas do oponente fazer o mesmo!';
    popUp.classList.toggle('hidden');
});

rulesBtn.addEventListener('mouseenter', playBip);

historyBtn.addEventListener('click', () => {
    text.innerText = 'Após a Grande Guerra Ninja, a vila de Konoha ficou devastada. Mas, graças ao grande Hokage Howard, foi possível reconstruir a vila em poucos meses. Além disso, sua incrível atuação na Guerra Ninja possibilitou salvar milhares de vidas, seu ninjutsu estilo água: Hsksjdh no Jutsu destruiu inimigos. Os habitantes de Konoha são tão gratos ao Hokage Howard que decidiram renomear sua vila para Howard Village.';
    popUp.classList.toggle('hidden');
});

historyBtn.addEventListener('mouseenter', playBip);

exitBtn.addEventListener('click', () => {
    popUp.classList.add('hidden');
});

exitBtn.addEventListener('mouseenter', playBip);

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

audioBtn.addEventListener('mouseenter', playBip);

chooseNamesBtn.addEventListener('mouseenter', playBip);

chooseNamesBtn.addEventListener('click', () => {
    chooseNames.classList.remove('hidden');
});

startBtn.addEventListener('mouseenter', playBip);

startBtn.addEventListener('click', () => {
    mainPanel.classList.add('vanish');
    clearTimeout(timeID);
    setTimeout(() => {
        mainPanel.classList.add('hidden');
        setTimer(15);
    }, 500);
});

selectedNamesBtn.addEventListener('mouseenter', playBip);

selectedNamesBtn.addEventListener('click', () => {
    chooseNames.classList.add('hidden');
});