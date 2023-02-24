const downloadButton = document.getElementById('download-button');
const countdownTimer = document.getElementById('countdown-timer');
const downloadLink = document.getElementById('download-link');

let countdown;
let timeLeft = 10; 

function startCountdown() {
    downloadButton.disabled = true; 
    timeLeft = 10; 
    countdown = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(countdown);
        downloadButton.disabled = false; 
        countdownTimer.textContent = '';
        timeLeft = 0; 
        downloadButton.textContent = "Download"; 
        return;
      }
      countdownTimer.textContent = `Please wait ${timeLeft} seconds before downloading...`;
    }, 1000);
  }
  
  

downloadButton.addEventListener('click', () => {
  startCountdown();
  setTimeout(() => {
    downloadLink.click();
  }, timeLeft * 1000);
});