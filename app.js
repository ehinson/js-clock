function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = seconds * 6;
  console.log(seconds);
  console.log(secondsDegrees);
}

setInterval(setDate, 1000);
