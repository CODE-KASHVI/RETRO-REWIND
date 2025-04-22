const resultBox = document.getElementById('result-box');
const yearDisplay = document.getElementById('year-display');
const moodSpan = document.getElementById('mood-span');

const client_id = 'e451fea5aa5a432884585998c3682be6';
const client_secret = '7840a3e8e24d428a91975355e8016f00';

async function getToken() {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`)
    },
    body: 'grant_type=client_credentials'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch token from Spotify');
  }

  const data = await res.json();
  return data.access_token;
}

async function fetchTracks(token, mood) {
  const res = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(mood)}&type=track&limit=10`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch tracks from Spotify');
  }

  const data = await res.json();
  return data.tracks.items || [];
}

function showTracks(tracks) {
  resultBox.innerHTML = '';
  if (tracks.length === 0) {
    resultBox.innerHTML = "<p style='color:white;'>No tracks found for this mood.</p>";
    return;
  }

  tracks.forEach(track => {
    const div = document.createElement('div');
    div.className = 'track';
    div.innerHTML = `
      <img src="${track.album.images[0]?.url}" alt="${track.name}" />
      <h3>${track.name}</h3>
      <p>by ${track.artists[0].name}</p>
      <a href="${track.external_urls.spotify}" target="_blank">Listen on Spotify</a>
    `;
    resultBox.appendChild(div);
  });
}

if (window.location.pathname.includes('result.html')) {
  const params = new URLSearchParams(window.location.search);
  const mood = params.get('mood');
  const year = params.get('year');

  moodSpan.textContent = mood || 'Unknown';
  yearDisplay.textContent = year || 'Unknown';

  (async () => {
    try {
      const token = await getToken();
      const tracks = await fetchTracks(token, mood);
      showTracks(tracks);
    } catch (err) {
      console.error(err);
      resultBox.innerHTML = '<p style="color:white;">Something went wrong loading Spotify!</p>';
    }
  })();
}
