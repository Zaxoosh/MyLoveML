function updateTime() { 
  const startDate = new Date(); 
  const clock = document.getElementById("clock"); 
  setInterval(() => { 
    fetch('https://timeapi.io/api/Time/current/zone?timeZone=Etc/UTC', {mode: 'no-cors'}) 
      .then(response => response.json()) 
      .then(({ dateString }) => { 
        const currentDate = new Date(dateString); 
        const diff = currentDate.getTime() - startDate.getTime(); 
        const totalSeconds = Math.floor(diff / 1000); 
        const days = Math.floor(totalSeconds / (60 * 60 * 24)); 
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60)); 
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60); 
        const seconds = totalSeconds % 60; 
        clock.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`; 
      }) 
      .catch(error => { 
        console.error('Error:', error); 
      }); 
  }, 1000); 
} 

window.onload = () => { 
  updateTime(); 
};
