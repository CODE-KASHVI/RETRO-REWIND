const goBtn = document.getElementById('goBtn');
const moodSelect = document.getElementById('moodSelect');
const resultBox = document.getElementById('result-box');
const funFactBtn = document.getElementById('funFactBtn');
const funFactBox = document.getElementById('funFactBox');
const retroBtn = document.getElementById('retroBtn');
retroBtn?.addEventListener('click', () => {
  window.location.href = 'retro.html';
});

const client_id = 'e451fea5aa5a432884585998c3682be6';
const client_secret = '7840a3e8e24d428a91975355e8016f00';

const funFacts = [
  "Did you know the first Bollywood movie was made in 1913?",
  "The retro era gave us Disco Dancer and John Travolta!",
  "R.D. Burman composed music using bottles and combs!",
  "Sholay ran for over 5 years in Mumbai is Minerva theater.",
  "Audrey Hepburn wore ballet flats — they became retro fashion staples.",
  "India is first full-length feature film, Raja Harishchandra, was released in 1913 by Dadasaheb Phalke.",
  "Disco Dancer made Mithun Chakraborty a sensation in Russia.",
  "Lata Mangeshkar recorded songs in a single take with live orchestras.",
  "Walkmans were the coolest way to listen to music in the 70s and 80s.",
  "Bollywood stars studied Hollywood VHS tapes for techniques.",
  "Kishore Kumar sometimes added fun sound effects into his recordings.",
  "Charlie Chaplins comedies inspired early Bollywood slapstick.",
  "Raj Kapoor's tramp character was beloved in the Soviet Union.",
  "Radio Ceylon was the top source for Bollywood hits before FM radio.",
  "Helen was Bollywood's Queen of Cabaret in the 60s and 70s.",
  "Elvis Presley's style inspired Bollywoods retro fashion.",
  "In the past, music composers were often bigger stars than the actors.",
  "Neecha Nagar (1946) was the first Indian film to win at Cannes.",
  "Mughal-e-Azam was the first Indian movie partially shot in color.",
  "Going to the movies meant neon lights, hand-painted posters, and long queues."
];

async function getToken() {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(`${client_id}:${client_secret}`)
    },
    body: 'grant_type=client_credentials'
  });
  const data = await res.json();
  return data.access_token;
}

async function fetchTracks(token, mood) {
  const res = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(mood)}&type=track&limit=10`, {
    headers: { Authorization: `Bearer ${token}` }
  });
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

funFactBtn?.addEventListener('click', () => {
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
  funFactBox.innerHTML = `<div class="fun-fact-box">${randomFact}</div>`;
});

goBtn?.addEventListener('click', () => {
  const mood = moodSelect.value;
  window.location.href = `result.html?mood=${mood}`;
});

if (window.location.pathname.includes('result.html')) {
  const params = new URLSearchParams(window.location.search);
  const mood = params.get('mood');
  moodDisplay.textContent = mood || 'Unknown Mood';

  (async () => {
    try {
      const token = await getToken();
      const tracks = await fetchTracks(token, mood);
      showTracks(tracks);
    } catch (err) {
      resultBox.innerHTML = '<p style="color:white;">Something went wrong loading Spotify!</p>';
    }
  })();
}
