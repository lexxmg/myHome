"use strict";

const ip = '192.168.0.101',
      btnLearningContainer = document.querySelector('.learning'),
      btnLearningStart = document.querySelector('.btn-start-js'),
      btnLearningTimer = document.querySelector('.lerning-btn-container__text-timer-js'),
      btnLearningUp = document.querySelector('.btn-up-js'),
      btnLearningUpPuls = document.querySelector('.btn-up-puls-js'),
      btnLearningStopUp = document.querySelector('.btn-up-stop-js'),
      btnLearningDown = document.querySelector('.btn-down-js'),
      btnLearningDownPuls = document.querySelector('.btn-down-puls-js'),
      btnLearningStopDown = document.querySelector('.btn-down-stop-js'),
      btnLearningFinish = document.querySelector('.btn-finish-js'),
      btnLearningFixUp = document.querySelector('.btn-fix-up-js');


btnLearningStart.addEventListener('click', async () => {
  console.log('start');

  await fetch(`/php/laurent.php?ip=${ip}&out=10&st=on`);
  await btnTimer(5, btnLearningStart);
  await fetch(`/php/laurent.php?ip=${ip}&out=10&st=off`);

  console.log('stop');
});

btnLearningUp.addEventListener('click', async () => {
  await fetch(`/php/laurent.php?ip=${ip}&out=11&st=on`);
});

btnLearningUpPuls.addEventListener('mousedown', async () => {
  await fetch(`/php/laurent.php?ip=${ip}&out=11&st=on`);
});

btnLearningUpPuls.addEventListener('mouseup', async () => {
  await fetch(`/php/laurent.php?ip=${ip}&out=11&st=off`);
});

btnLearningStopUp.addEventListener('click', async () => {
  await fetch(`/php/laurent.php?ip=${ip}&out=11&st=off`);
});

btnLearningDownPuls.addEventListener('mousedown', async () => {
  await fetch(`/php/laurent.php?ip=${ip}&out=12&st=on`);
});

btnLearningDownPuls.addEventListener('mouseup', async () => {
  await fetch(`/php/laurent.php?ip=${ip}&out=12&st=off`);
});

btnLearningDown.addEventListener('click', async () => {
  await fetch(`/php/laurent.php?ip=${ip}&out=12&st=on`);
});

btnLearningStopDown.addEventListener('click', async () => {
  await fetch(`/php/laurent.php?ip=${ip}&out=12&st=off`);
});

btnLearningFixUp.addEventListener('click', async () => {
  await fetch(`/php/laurent.php?ip=${ip}&out=10&st=on`);
  await timer(1000);
  await fetch(`/php/laurent.php?ip=${ip}&out=10&st=off`);
});

btnLearningFinish.addEventListener('click', async () => {
  await fetch(`/php/laurent.php?ip=${ip}&out=10&st=on`);
  await timer(1000);
  await fetch(`/php/laurent.php?ip=${ip}&out=10&st=off`);

  btnLearningStart.textContent = 'начать обучение';
});

function btnTimer(sec = 5, btn) {
  return new Promise((resolve, reject) => {
    const btnTimer = btn.querySelector('span');
    let counter = sec;

    btnTimer.textContent = ': ' + counter;
  
    let timerId = setInterval(() => {
      counter--;
      btnTimer.textContent = ': ' + counter;

      if (counter < 0) {
        btnTimer.textContent = '';
        btn.textContent = 'Обучение запущено';
        clearTimeout(timerId);
        resolve();
      }
    }, 1000);
  });
}

async function stop(dir, out = 10) {
  await fetch(`/php/laurent.php?ip=${ip}&out=${out}&st=off`);
  await fetch(`/php/laurent.php?ip=${ip}&out=${out}&st=on`);
  await timer(1000);
  await fetch(`/php/laurent.php?ip=${ip}&out=${out}&st=off`);
}

function timer(ms = 1000) {
  return new Promise((resolve, reject) => (
    setTimeout(() => {resolve()}, ms)
  ));
}

