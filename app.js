const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    //covert seconds to degrees
    const secondInDeg = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondInDeg}deg)`;


    const min = now.getMinutes();
    const minInDeg = ((min / 60) * 360) + 90
    minHand.style.transform = `rotate(${minInDeg}deg)`;
    // console.log(minHand);

    const hour = now.getHours();
    const hourInDeg = ((hour / 60) * 360) + 90
    hourHand.style.transform = `rotate(${hourInDeg}deg)`
}


setInterval(setDate, 1000)