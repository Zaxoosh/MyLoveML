function updateTime() {
    var startDate = new Date();
    var storedStartDate = localStorage.getItem('startDate');
    if (storedStartDate) {
        startDate = new Date(storedStartDate);
    } else {
        startDate.setDate(startDate.getDate() - 160);
        localStorage.setItem('startDate', startDate);
    }
    var clock = document.getElementById('clock');
    setInterval(function() {
        var currentDate = new Date();
        var diff = currentDate.getTime() - startDate.getTime();
        var totalSeconds = Math.floor(diff / 1000);
        var days = Math.floor(totalSeconds / (60 * 60 * 24));
        var hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        var seconds = totalSeconds % 60;
        clock.innerHTML = days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds';
    }, 1000);
}
window.onload = updateTime;
