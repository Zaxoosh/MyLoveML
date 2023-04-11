<!-- Create an element to display the clock -->
<div id='clock'></div>

<script>
  // Function to format time data as a string
  function formatTimeData(timeData) {
    let formattedTime = '';
    if (timeData.days > 0) {
      formattedTime += timeData.days + ' days, ';
    }
    if (timeData.hours > 0) {
      formattedTime += timeData.hours + ' hours, ';
    }
    if (timeData.minutes > 0) {
      formattedTime += timeData.minutes + ' minutes, ';
    }
    formattedTime += timeData.seconds + ' seconds';
    return formattedTime;
  }

  // Define the date when you met in UTC format
  const startDate = Date.UTC(2022, 9, 30, 0, 0, 0); // Month is zero-based (0 for January)

  // Function to update the time
  function updateTime() {
    let clock = document.getElementById("clock");
    let currentDate = new Date();
    let timeDifference = Math.floor((currentDate.getTime() - startDate) / 1000);
    let timeData = {
      days: Math.floor(timeDifference / (60 * 60 * 24)),
      hours: Math.floor((timeDifference % (60 * 60 * 24)) / (60 * 60)),
      minutes: Math.floor((timeDifference % (60 * 60)) / 60),
      seconds: timeDifference % 60
    };
    let timeString = formatTimeData(timeData);
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
