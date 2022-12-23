import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(SimpleLightbox);
const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery">
      <a class="gallery__item" href="${original}">
      <img  class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`
  )
  .join('');
gallery.innerHTML = markup;

const SimpleLightboxModal = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
}).preventDefault;
