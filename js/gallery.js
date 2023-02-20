const hamburger1 = document.querySelector('.hamburger')
const images = document.querySelectorAll('.gallery-img')
const imagesLight = document.querySelector('.img-add')
const lightContainer = document.querySelector('.image-light');


images.forEach(image => {

    image.addEventListener('click', () => {

        showImage(image.getAttribute('src'))
    });
    
});


lightContainer.addEventListener('click', (e) => {

    if(e.target != imagesLight) {
        lightContainer.classList.toggle('show')
        imagesLight.classList.toggle('showImage')
        hamburger1.style.opacity = '1';

    }
    
});

const showImage = (image) => {
    imagesLight.src = image;
    lightContainer.classList.toggle('show')
    imagesLight.classList.toggle('showImage')
    hamburger1.style.opacity = '0';
}
