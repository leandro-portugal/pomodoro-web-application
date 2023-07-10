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
    time;

function startValues(){
    
    isRunning,
    isBreakTime,
    workTime = 1500,
    breakTime = 300,
    longBreakTime = 900,
    totalTurns,
    currentTurn,
    totalTime,
    timeRemaining,
    time;
}

function setCirclePercent(percent){

    const circlePerimeter = 636;
    const dashOffset = (circlePerimeter * (percent / 100));
    circleElement.style.setProperty('--dash-offset', dashOffset, circlePerimeter - dashOffset);

}