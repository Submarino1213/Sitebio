document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    showImage(currentIndex);
    setInterval(nextImage, 8000);
});