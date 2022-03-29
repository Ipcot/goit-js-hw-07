import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click',onImgClick)

function createMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        
        return `<div class="gallery__item">
    <a class="gallery__link" href='${original}'>
    <img
        class="gallery__image"
        src='${preview}'
        data-source='${original}'
        alt='${description}'
    />
    </a>
</div>`
    }).join('');
}

function onImgClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    };
    
    openModal(event.target.dataset.source);
}

let originalImage;
function openModal(source) {
    originalImage = basicLightbox.create(`
		<img src="${source}">
	`)

    originalImage.show();

    onModalAddKeyDownListener();
}

function onModalAddKeyDownListener() {
    window.addEventListener('keydown', onEscapePress)
}

function onEscapePress(event) {
    if (event.code === 'Escape') {
        originalImage.close();
        onModalEscapePressCloseWindow();
    };
}

function onModalEscapePressCloseWindow() {
    window.document.removeEventListener('keydown', onEscapePress)
}
    
    