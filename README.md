Retro Rewind is a vintage-themed web app that brings the golden era of music to life. With a classic design inspired by the aesthetics of the past, users can explore top Spotify tracks based on their selected mood, discover fun retro facts, and view a collage of curated vintage images.

**Features**
->Mood-Based Music Discovery
Users can select a mood (like Happy, Sad, Romantic, Party, Chill), and the app fetches top tracks from Spotify that match the selected mood.
->Surprise Fun Facts
A curated list of retro-themed fun facts adds an extra layer of nostalgia and engagement.
->Retro Mode Collage
Clicking "Retro Mode" redirects to a visually rich collage of 9 vintage/retro-themed images sourced from Unsplash.
->Stylish Retro UI
The app is styled with a warm, vintage color palette, old-school fonts, and aesthetic layout inspired by classic film posters and record sleeves.

**Tech Stack**
HTML5 / CSS3
JavaScript 
Spotify Web API (for music search)
Unsplash API (for image collage)

**How It Works**
User selects a mood from the dropdown.The app fetches 5–10 matching songs from Spotify and displays them.
Users can click "Retro Mode" to view a stylized collage.
A "Surprise Me" button shows a random retro fun fact from a predefined list.

**Setup Instructions**
Clone the repository:
bash
Copy
Edit
git clone https://github.com/your-username/retro-rewind.git
cd retro-rewind
Add your own Spotify API credentials in script.js.
Replace the Unsplash API key in retro.js.
Open index.html in your browser.

**Notes**
This app uses the client credentials flow from Spotify, which limits access to only public tracks and doesn’t support user-specific data like playlists or saved songs.
No backend is used; all API requests are made directly from the frontend.
