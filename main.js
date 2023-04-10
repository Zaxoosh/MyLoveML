function updateTime() { 
  const startDate = new Date(); 
  const clock = document.getElementById('clock'); 
  setInterval(() => { 
    fetch('https://timeapi.io/api/Time/current/zone?timeZone=Etc/UTC', { mode: 'no-cors' }) // Add 'mode: no-cors' to the fetch options
      .then(response => response.text()) // Note: response will be opaque, so only text() method can be used
      .then(data => {
        // Process the response data
        // Note: Since the response is opaque, you won't be able to access the response body or headers
      })
      .catch(error => { 
        console.error('Error:', error); 
      }); 
  }, 1000); 
} 

document.addEventListener('DOMContentLoaded', () => { 
  updateTime(); 
});
