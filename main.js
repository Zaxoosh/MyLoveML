<!-- Create an element to display the clock -->
<div id="clock"></div>

<script>
// Function to calculate time difference
function calculateTimeDifference(startDate) {
  let currentDate = new Date();
  let timeDifference = currentDate.getTime() - startDate.getTime();
  let totalSeconds = Math.floor(timeDifference / 1000);
  let days = Math.floor(totalSeconds / (60 * 60 * 24));
  let hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  let seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

// Function to format time data as a string
function formatTimeData(timeData) {
  return `${timeData.days} days, ${timeData.hours} hours, ${timeData.minutes} minutes, ${timeData.seconds} seconds`;
}

// Define the date when you met
const startDate = new Date('2022-10-30T00:00:00Z');

// Function to update the time
function updateTime() {
  let clock = document.getElementById("clock");
  let timeData = calculateTimeDifference(startDate);
  let timeString = formatTimeData(timeData);
  clock.innerHTML = timeString;
}

// Call updateTime function on window load
window.onload = () => {
  updateTime();
  setInterval(updateTime, 1000); // Call updateTime function every 1000ms (1 second)
};
</script>
