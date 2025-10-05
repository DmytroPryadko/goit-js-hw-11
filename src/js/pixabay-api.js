import axios from 'axios';

const API_KEY = '44822102-6d1d7649cda1a595bd957c97f';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function fetchImages(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: PER_PAGE,
      },
    });

    // axios автоматично повертає response.data
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
