import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const imageMarkup = createGallery(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', imageMarkup);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, description, preview }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

galleryRef.addEventListener('click', onGalleryClick);
function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
}
let gallery = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
