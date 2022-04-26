import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        
        return `<li><a class="gallery__item" href='${original}'>
  <img class="gallery__image" src='${preview}' alt='${description}' />
</a></li>`
    }).join('');
}

let gallery = new SimpleLightbox('.gallery a', {captions: true, captionsData: 'alt', captionDelay: 250,});

console.log(galleryItems);
