const secondHand = document.querySelector('.seconds');
const minuteHand = document.querySelector('.minutes');
const hourHand = document.querySelector('.hours');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const minutes = now.getHours();
  const secondsDegrees = (seconds * 6 )+ 90;
  const minutesDegrees = (minutes * 6 )+ 90;
  const hoursDegrees = (hours * 30 )+ 90;
  console.log(minutes);
  console.log(minutesDegrees);

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees }deg)`;
}

setInterval(setDate, 1000);
