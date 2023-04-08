// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Define the love date
    const loveDate = new Date("2023-01-01");
  
    // Get the timer element from the page
    const timer = document.getElementById("timer");
  
    // Update the timer every second
    setInterval(function () {
      // Calculate the time difference between now and the love date
      const now = new Date();
      const diff = Math.floor((now - loveDate) / 1000);
  
      // Update the timer element with the time difference
      timer.setAttribute("data-count", diff);
    }, 1000);
  
    // Add flying hearts in the background as you scroll
    window.addEventListener("scroll", function () {
      const hearts = document.querySelectorAll(".heart");
      hearts.forEach(function (heart) {
        const speed = heart.getAttribute("data-speed");
        const yPos = -(window.pageYOffset * speed / 100);
        heart.style.transform = "translateY(" + yPos + "px)";
      });
    });
  });
  