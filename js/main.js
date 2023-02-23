const downloadButton = document.getElementById('download-button');
const countdownTimer = document.getElementById('countdown-timer');
const downloadLink = document.getElementById('download-link');

let countdown;
let timeLeft = 10; // in seconds

function startCountdown() {
    downloadButton.disabled = true; // disable the download button
    timeLeft = 10; // reset timeLeft to its initial value
    countdown = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(countdown);
        downloadButton.disabled = false; // enable the download button
        countdownTimer.textContent = '';
        timeLeft = 0; // set timeLeft to zero to prevent negative values
        downloadButton.textContent = "Download"; // reset download button text
        return;
      }
      countdownTimer.textContent = `Please wait ${timeLeft} seconds before downloading...`;
    }, 1000);
  }
  
  

downloadButton.addEventListener('click', () => {
  startCountdown();

  // create a link to the file and simulate a click on it
  setTimeout(() => {
    downloadLink.click();
  }, timeLeft * 1000);
});