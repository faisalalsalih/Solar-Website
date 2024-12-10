

const menubtn = document.getElementById("menu_bar");

const crossbtn = document.getElementById("cross");


const sidebar = document.querySelector(".sidebar");


menubtn.onclick = () => {
    sidebar.classList.toggle("active");
}

crossbtn.onclick = () => {
    sidebar.classList.remove("active");
}




// ========= Image carousel ============ //

const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator .progress');
let currentIndex = 0;
const totalItems = carouselItems.length;
const changeInterval = 2000; // Change image every 2 seconds

function showNextImage() {
    // Reset all progress bars
    indicators.forEach(indicator => indicator.style.width = '0');

    currentIndex = (currentIndex + 1) % totalItems;
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Animate the progress bar of the current indicator
    indicators[currentIndex].style.width = '100%';

    // Change image after the progress bar fills
    setTimeout(showNextImage, changeInterval);
}

// Start the carousel
showNextImage();
