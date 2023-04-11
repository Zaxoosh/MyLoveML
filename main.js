<!-- Create an element to display the clock -->
<div id='clock'></div>

<script>
  // Function to format time data as a string
  function formatTime(totalSeconds) {
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    var hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    var seconds = totalSeconds % 60;

    return days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
  }

  // Define the date when you met in UTC format
  const startDate = Date.UTC(2022, 9, 30, 0, 0, 0); // Month is zero-based (0 for January)

  // Function to update the time
  function updateTime() {
    let clock = document.getElementById("clock");
    let currentDate = new Date();
    let timeDifference = Math.floor((currentDate.getTime() - startDate) / 1000);
    let timeString = formatTime(timeDifference);
    clock.innerHTML = timeString;
  }

  // Call updateTime function on window load
  window.onload = () => {
    updateTime();
    setInterval(updateTime, 1000); // Call updateTime function every 1000ms (1 second)
  };
</script>

<!-- Close the div element -->
</div>
