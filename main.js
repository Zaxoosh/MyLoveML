function updateTime() {
    var startDate = new Date();
    var storedStartDate = localStorage.getItem('startDate');
    if (storedStartDate) {
      startDate = new Date(storedStartDate);
    } else {
      startDate.setDate(startDate.getDate() - 163);
      localStorage.setItem('startDate', startDate);
    }
    var clock = document.getElementById('clock');
    setInterval(function() {
      fetch('https://worldtimeapi.org/api/timezone/Etc/UTC')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          var currentDate = new Date(data.utc_datetime);
          var diff = currentDate.getTime() - startDate.getTime();
          var totalSeconds = Math.floor(diff / 1000);
          var days = Math.floor(totalSeconds / (60 * 60 * 24));
          var hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
          var minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
          var seconds = totalSeconds % 60;
          clock.innerHTML = days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds';
        })
        .catch(function(error) {
          console.error('Error:', error);
        });
    }, 1000);
  }
  
  window.onload = updateTime;  