var sliderImages = document.querySelectorAll('.slider img');
var currentImageIndex = 0;

function showNextImage() {
  sliderImages[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
  sliderImages[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 3000);

