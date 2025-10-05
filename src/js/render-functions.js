import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// ❌ Помилки / інформаційні повідомлення
export function showError(message) {
  iziToast.error({
    title: 'Error',
    message,
    position: 'topRight',
  });
}

export function showInfo(message) {
  iziToast.info({
    title: 'Info',
    message,
    position: 'topRight',
  });
}

// ✅ Рендеринг галереї
export function renderGallery(galleryEl, images) {
  const markup = images
    .map(image => {
      return `
        <a href="${image.largeImageURL}" class="gallery-item">
          <div class="image-card">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            <div class="info">
              <p><b>Likes:</b> ${image.likes}</p>
              <p><b>Views:</b> ${image.views}</p>
              <p><b>Comments:</b> ${image.comments}</p>
              <p><b>Downloads:</b> ${image.downloads}</p>
            </div>
          </div>
        </a>
      `;
    })
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
}

// ✅ Очищення галереї
export function clearGallery(galleryEl) {
  galleryEl.innerHTML = '';
}

// ✅ Показ / приховання лоадера
export function showLoader(loaderEl) {
  loaderEl.style.display = 'block';
}

export function hideLoader(loaderEl) {
  loaderEl.style.display = 'none';
}
