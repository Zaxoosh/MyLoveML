<!-- Include the LocalStorageDB library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/localStorageDB/2.7/localStorageDB.min.js"></script>

<!-- Create an element to display the clock -->
<div id="clock"></div>

<script>
// Create a LocalStorageDB instance
const db = new localStorageDB('myDB', localStorage);

// Define a function to update the time
function updateTime() {
  let startDate = new Date();
  let clock = document.getElementById("clock");
  
  // Fetch current date and time from an API
  fetch('https://worldtimeapi.org/api/timezone/Etc/UTC')
    .then(response => response.json())
    .then(({ datetime }) => {
      let currentDate = new Date(datetime);
      let diff = currentDate.getTime() - startDate.getTime();
      let totalSeconds = Math.floor(diff / 1000);
      let days = Math.floor(totalSeconds / (60 * 60 * 24));
      let hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      let minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      let seconds = totalSeconds % 60;
      let timeString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
      clock.innerHTML = timeString;

      // Store the time data in LocalStorageDB
      db.insertOrUpdate('timeData', { id: 1, time: timeString });

      // Commit changes to LocalStorageDB
      db.commit();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Check if time data exists in LocalStorageDB and display it
if (db.tableExists('timeData')) {
  let timeData = db.queryAll('timeData')[0];
  document.getElementById("clock").innerHTML = timeData.time;
}

// Call updateTime function on window load
window.onload = () => {
  updateTime();
  setInterval(updateTime, 1000); // Call updateTime function every 1000ms (1 second)
};
</script>
