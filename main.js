// JavaScript code for clock
function updateClock() {
  var now = luxon.DateTime.local();
  var timeString = now.toFormat('HH:mm:ss');
  document.getElementById('clock').textContent = timeString;
  setTimeout(updateClock, 1000);
}
updateClock();

// Update days, hours, minutes, and seconds in the clock
function updateCountdown() {
  var countdownDate = luxon.DateTime.fromISO('2023-04-08T00:00:00Z');
  var now = luxon.DateTime.local();
  var distance = countdownDate.diff(now, 'milliseconds');

  // Calculate days, hours, minutes, and seconds
  var duration = luxon.Duration.fromMillis(distance);
  var days = duration.as('days');
  var hours = duration.as('hours') % 24;
  var minutes = duration.as('minutes') % 60;
  var seconds = duration.as('seconds') % 60;

  // Update the countdown elements in the HTML
  document.getElementById('days').textContent = 'Days: ' + Math.floor(days);
  document.getElementById('hours').textContent = 'Hours: ' + Math.floor(hours);
  document.getElementById('minutes').textContent = 'Minutes: ' + Math.floor(minutes);
  document.getElementById('seconds').textContent = 'Seconds: ' + Math.floor(seconds);
  setTimeout(updateCountdown, 1000);
}
updateCountdown();
