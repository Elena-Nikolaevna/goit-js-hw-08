// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
console.log(gallery);
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
gallery.innerHTML = galleryMarkup;

let galleryLightbox = new SimpleLightbox('.gallery a', { 
    captionDelay: 250,
    captionsData: "alt",});
console.log (galleryLightbox)

function createGalleryItemsMarkup(gallery) {
    return gallery
      .map(({ preview, original, description }) => {
        return `
          <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}"
          data-source="${original}"
          alt="${description}" />
        </a>
        `;
      })
      .join("");
  }