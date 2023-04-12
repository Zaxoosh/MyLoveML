// Define the target date
const targetDate = new Date('October 30, 2022 00:00:00').getTime();

// Update the clock every second
const interval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time difference between the current date and the target date
  const timeDifference = now - targetDate;

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the time elapsed in the HTML elements
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
});

// Show more button click event
document.getElementById('showMoreButton').addEventListener('click', () => {
  // Show the hidden reason list
  document.getElementById('reasonPlaceholder').style.display = 'list-item';
  // Hide the show more button
  document.getElementById('showMoreButton').style.display = 'none';
});
