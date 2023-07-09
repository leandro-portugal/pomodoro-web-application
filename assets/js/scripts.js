const circleElement = document.querySelector('circle');

function setCirclePercent(percent){

    const circlePerimeter = 636;
    const dashOffset = (circlePerimeter * (percent / 100));
    circleElement.style.setProperty('--dash-offset', dashOffset, circlePerimeter - dashOffset);

}