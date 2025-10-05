import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showError,
  showInfo,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Елементи DOM
const searchForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Ініціалізація Lightbox
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const queryValue = form.elements.input.value.trim();

  if (!queryValue) {
    showError('Please enter something!');
    return;
  }

  clearGallery(gallery);
  showLoader(loader);

  fetchImages(queryValue)
    .then(data => {
      if (data.hits.length === 0) {
        showInfo('Sorry, there are no images matching your search query. Please try again!');
      } else {
        renderGallery(gallery, data.hits);
        lightbox.refresh();
      }
    })
    .catch(error => {
      console.error(error);
      showError('An error occurred while fetching images. Please try again later.');
    })
    .finally(() => {
      hideLoader(loader);
      form.reset();
    });
}
