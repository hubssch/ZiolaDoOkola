const quiz = document.querySelector('#quiz')
const slajder = document.querySelector('#slajder')
const Images = ['./images/cannabis-social.2e16d0ba.fill-1200x1200.jpg', './images/duze-zblizenie-lemon-skunk-red-no-2-1024x768.jpg.webp', './images/Macro_cannabis_bud.jpg']
const prevButton = document.querySelector('#prev-btn')
const nextButton = document.querySelector('#next-btn')



// EventListenery

nextButton.addEventListener('click', () => {})



//Funkcje

// const showSlajder = (image) => {
//     for(image = 0; image < Images.length; image++) {
//     const newImage = document.createElement('img')
//     newImage.classList.add('slajdImage')
//     // newImage.src = './images/cannabis-social.2e16d0ba.fill-1200x1200.jpg'
//     newImage.src = Images[image]
//     slajder.appendChild(newImage)
//     console.log('Funkcja jest wywyoływana')
//     }
// }

const showSlajder = () => {
    let currentIndex = 0;

    const changeImage = () => {
        // Clear previous images
        slajder.innerHTML = '';

        // Create new image element
        const newImage = document.createElement('img');
        newImage.classList.add('slajdImage');
        newImage.src = Images[currentIndex];
        slajder.appendChild(newImage);

        // Update index for next image
        currentIndex = (currentIndex + 1) % Images.length; // Loop back to the first image
    };

    // Show the first image immediately
    changeImage();

    // Change image every 3 seconds (3000 milliseconds)
    setInterval(changeImage, 5000);
};

// Funkcja do przełączania slajdów
const showNextSlide = () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
};

// Funkcja do przełączania na poprzedni slajd
const showPrevSlide = () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
};

showSlajder(Images[0])

