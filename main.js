// JavaScript code for clock
function updateClock() {
  var now = new Date();
  var hours = String(now.getHours()).padStart(2, '0');
  var minutes = String(now.getMinutes()).padStart(2, '0');
  var seconds = String(now.getSeconds()).padStart(2, '0');
  var timeString = hours + ':' + minutes + ':' + seconds;
  document.getElementById('clock').textContent = timeString;
  setTimeout(updateClock, 1000);
}
updateClock();

// Update days, hours, minutes, and seconds in the clock
function updateCountdown() {
  var countdownDate = new Date('2023-04-08T00:00:00Z'); // Set your target date and time here
  var now = new Date().getTime();
  var distance = countdownDate - now;
  
  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Update the countdown elements in the HTML
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
  
  setTimeout(updateCountdown, 1000);
}
updateCountdown();