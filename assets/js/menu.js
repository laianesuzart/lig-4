const rulesBtn = document.getElementById('rulesBtn');
const audioBtn = document.getElementById('audioBtn');
const historyBtn = document.getElementById('historyBtn');
const popUp = document.getElementById('popUp');
const text = document.getElementById('text');
const exitBtn = document.getElementById('exitBtn');

rulesBtn.addEventListener('click', () => {
    text.innerText = 'Lig 4 é um jogo popular lançado pela empresa Milton Bradley Company (que foi adquirida pela Hasbro em 1984) em 1974, com o nome de "Connect Four". Neste jogo, os dois jogadores devem colocar as fichas estratégicamente na base, de forma a formar uma sequência com as 4 fichas da sua cor, ao mesmo tempo em que devem prestar atenção para bloquear as tentativas do oponente fazer o mesmo!';
    popUp.classList.toggle('hidden');
});

exitBtn.addEventListener('click', () => {
    popUp.classList.add('hidden');
});