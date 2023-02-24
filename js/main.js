// prix.html

function dogName() {
  var dog_name = ["Red Dog 5K Wallpaper",
    "Sad Pug Puppy",
    "Whippet Dog 5K Wallpaper",
    "White Dog Puppy",
    "White Bulldog on Carpet",
    "White Dog 4K Wallpaper",
    "2 Lovely Dog Puppy",
    "3 Cutest Poodle Dog Puppy",
    "Akita Dog Wallpaper"]

  var randomIndex = Math.floor(Math.random() * dog_name.length)

  var dogTitle = event.target.parentElement.querySelector(".name_dog")
  dogTitle.innerHTML = dog_name[randomIndex]

  var randomNumber = Math.floor(Math.random() * 91) + 10;
  var dogP = event.target.parentElement.querySelector(".name_dogk")
  dogP.innerHTML = `${randomNumber} €`
}

// button Download
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

function toggleBlackout() {
  var elements = document.querySelectorAll('html *:not(button)');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('blackout');
  }
  var image = document.querySelector('img[src="images/iphone6.png"]');
  if (image) {
    image.classList.toggle('hidden');
  }
  var buttons = document.querySelectorAll('.download-button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle('hidden');
  }
  var images = document.querySelectorAll('.card');
  console.log(images);
  for (var i = 0; i < images.length; i++) {
    images[i].classList.toggle('hidden');
  }
}
