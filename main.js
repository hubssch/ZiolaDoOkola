const quiz = document.querySelector('#quiz');
const slajder = document.querySelector('#slajder');
const Images = ['./images/cannabis-social.2e16d0ba.fill-1200x1200.jpg', './images/duze-zblizenie-lemon-skunk-red-no-2-1024x768.jpg.webp', './images/Macro_cannabis_bud.jpg'];
const prevButton = document.querySelector('#prev-btn');
const nextButton = document.querySelector('#next-btn');

let currentIndex = 0;

const showImage = (index) => {
    slajder.innerHTML = ''; // Clear previous images

    const newImage = document.createElement('img');
    newImage.classList.add('slajdImage');
    newImage.src = Images[index];
    slajder.appendChild(newImage);
};

const showNextImage = () => {
    currentIndex = (currentIndex + 1) % Images.length; // Loop back to the first image
    showImage(currentIndex);
};

const showPrevImage = () => {
    currentIndex = (currentIndex - 1 + Images.length) % Images.length; // Loop to the last image if at the beginning
    showImage(currentIndex);
};

// Event listeners for buttons
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

// Show the first image immediately
showImage(currentIndex);

// Auto-change image every 5 seconds
setInterval(showNextImage, 5000);
