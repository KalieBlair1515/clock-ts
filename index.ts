const secondHand = document.querySelector<HTMLElement>(".second-hand");
const minHand = document.querySelector<HTMLElement>(".min-hand");
const hourHand = document.querySelector<HTMLElement>(".hour-hand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    if (secondHand === null) return;
     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const min = now.getMinutes();
    const minutesDegrees = ((min / 60) * 360) + 90;
    if (minHand === null) return;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    const hour = now.getHours();
    const hoursDegrees = ((hour / 12) * 360) + 90;
    if (hourHand === null) return;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);