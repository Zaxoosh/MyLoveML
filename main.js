const loveTimer = document.getElementById("love-timer");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateTimer() {
  const now = new Date();
  const start = new Date();
  start.setMonth(start.getMonth() - 6);
  const elapsed = now - start;
  const secondsElapsed = Math.floor(elapsed / 1000);

  const daysElapsed = Math.floor(secondsElapsed / (3600 * 24));
  const hoursElapsed = Math.floor((secondsElapsed % (3600 * 24)) / 3600);
  const minutesElapsed = Math.floor((secondsElapsed % 3600) / 60);
  const secondsRemainder = secondsElapsed % 60;

  days.textContent = formatNumber(daysElapsed);
  hours.textContent = formatNumber(hoursElapsed);
  minutes.textContent = formatNumber(minutesElapsed);
  seconds.textContent = formatNumber(secondsRemainder);
}

function formatNumber(number) {
  return number.toString().padStart(2, "0");
}

updateTimer();
setInterval(updateTimer, 1000);
