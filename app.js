const secondHand = document.querySelector('.seconds');
const minuteHand = document.querySelector('.minutes');
const hourHand = document.querySelector('.hours');
var color = '';
const secondDigital = document.querySelector('.second-digital');
const hourDigital = document.querySelector('.hour-digital');
const minuteDigital = document.querySelector('.minute-digital');

function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function toHex(n) {
  return n.toString(16);
}

function setDate() {
  const now = new Date();

  const seconds = addZero(now.getSeconds());
  const secondsDegrees = seconds * 6 + 90;

  const minutes = addZero(now.getMinutes());
  const minutesDegrees = minutes * 6 + 90;

  const hours = addZero(now.getHours());
  const hoursDegrees = hours * 30 + 90;

  if (hours == 00) {
    hourDigital.innerHTML = '12:';
  } else {
    secondDigital.innerHTML = seconds;
    minuteDigital.innerHTML = minutes + ':';
    hourDigital.innerHTML = hours + ':';
  }

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  document.body.style.backgroundColor = '#' + toHex(hours * 24) + toHex(minutes) + toHex(seconds);
}

setInterval(setDate, 1000);
