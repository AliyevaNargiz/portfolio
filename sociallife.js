document.addEventListener('DOMContentLoaded', function() {
    const images = ["img/art.jpeg", "img/diego.jpeg", "img/me.png"]; // Add your image names here
    let currentImageIndex = 0;
    const galleryImage = document.getElementById('galleryImage');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    function updateImage() {
        galleryImage.src = images[currentImageIndex];
        prevButton.disabled = (currentImageIndex === 0);
        nextButton.disabled = (currentImageIndex === images.length - 1);
    }

    
    prevButton.addEventListener('click', function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateImage();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
            updateImage();
        }
    });

    updateImage();
});
