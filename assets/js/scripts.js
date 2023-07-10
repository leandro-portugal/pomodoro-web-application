const circleElement = document.querySelector('.circle');
const timeElement = document.querySelector('.time');
const timeModeElement = document.querySelector('.time-mode');
const turnsElement = document.querySelector('.turns');
const controlButton = document.querySelector('.timer-control');
const resetButton = document.querySelector('.reset-timer')
const notificationSound = document.querySelector('#notification');

let isRunning,
    isBreakTime,
    workTime,
    breakTime,
    longBreakTime,
    totalTurns,
    currentTurn,
    totalTime,
    timeRemaining,
    timer;

function startValues(){

    isRunning = false,
    isBreakTime = false,
    workTime = 1500,
    breakTime = 300,
    longBreakTime = 900,
    totalTurns = 4,
    currentTurn = 1,
    totalTime = workTime,
    timeRemaining = totalTime,
    timer = null;
}

function start(){
    isRunning = true;
    controlButton.innerText='Pausar';
    timer.setInterval(updateTimer, 1000);

}

function toggleStartPause(){
    isRunning ? pause() : start();
}

function pause(){
    isRunning = false;
    controlButton.innerText='Iniciar';
    clearInterval(timer);
}

function setCirclePercent(percent){

    const circlePerimeter = 636;
    const dashOffset = (circlePerimeter * (percent / 100));
    circleElement.style.setProperty('--dash-offset', dashOffset, circlePerimeter - dashOffset);

}