import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const imageMarkup = createGallery(galleryItems);

let instance = null;

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, description, preview }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>`;
    })
    .join('');
}
galleryRef.insertAdjacentHTML('beforeend', imageMarkup);
galleryRef.addEventListener('click', onGalleryClick);
function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  modalShow(e.target.dataset.source);
}
function modalShow(src) {
  const instance = basicLightbox.create(`
    <img src="${src}" width="800" height="600">`);
  instance.show(() => {
    addEscListener();
  });

  function onEscClick(e) {
    if (e.key === 'Escape') {
      instance.close(() => {
        removeEscListener();
      });
    }
  }

  function addEscListener() {
    window.addEventListener('keydown', onEscClick);
  }

  function removeEscListener() {
    window.removeEventListener('keydown', onEscClick);
  }
}
