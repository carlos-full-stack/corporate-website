const hamburger1 = document.querySelector('.hamburger')
const images = document.querySelectorAll('.gallery-img')
const imagesLight = document.querySelector('.img-add')
const lightContainer = document.querySelector('.image-light');


images.forEach(image => {

    image.addEventListener('click', () => {

        showImage(image.getAttribute('src'))
    });
    
});

const showImage = (image) => {
    imagesLight.src = image;
    lightContainer.classList.toggle('show')
    imagesLight.classList.toggle('showImage')
}
