const ACCESS_KEY = 'nKXIddP99dlaaimWZEVAq3Z2QpO0y1up1e6z7EkvM_s';
const keywords = 'vintage,retro,music,aesthetic,old';
const collage = document.getElementById('collage');

async function fetchRetroImages() {
  const response = await fetch(`https://api.unsplash.com/photos/random?query=${keywords}&count=9&client_id=${ACCESS_KEY}`);
  return await response.json();
}

function displayImages(images) {
  collage.innerHTML = '';
  images.forEach(img => {
    const container = document.createElement('div');
    container.style.position = 'relative';
    const image = document.createElement('img');
    image.src = img.urls.small;
    image.alt = img.alt_description || 'Retro image';
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.textContent = img.description || img.alt_description || 'Vintage vibes from Unsplash';
    container.appendChild(image);
    container.appendChild(overlay);
    collage.appendChild(container);
  });
}

(async () => {
  try {
    const images = await fetchRetroImages();
    displayImages(images);
  } catch (error) {
    collage.innerHTML = '<p>Failed to load images. Please try again later.</p>';
  }
})();
