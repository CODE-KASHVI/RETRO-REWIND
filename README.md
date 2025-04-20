Retro Rewind
Retro Rewind is a vintage-themed web application that revives the charm of the golden music era. With a nostalgic user interface and classic design elements, users can explore mood-based music selections, enjoy random retro fun facts, and browse a curated collage of vintage visuals.

Features
Mood-Based Music Discovery
Select a mood (e.g., Happy, Sad, Romantic, Party, Chill) and explore top tracks fetched from the Spotify API based on that emotion.

 Fun Retro Facts
Enjoy a randomized selection of curated retro facts for a nostalgic twist.

 Retro Mode Collage
Launch a visually rich collage featuring 9 handpicked vintage or retro-style images using the Unsplash API.

 Stylish Retro UI
Designed with a warm, vintage-inspired color palette, classic typefaces, and layouts reminiscent of old movie posters and record sleeves.

Tech Stack
Frontend: HTML5, CSS3, JavaScript

APIs Used:

Spotify Web API for fetching mood-based tracks

Unsplash API for retrieving retro-style images

How It Works
The user selects a mood from the dropdown menu.

The app fetches 5–10 top tracks from Spotify that match the selected mood.

Users can explore a visually rich retro collage by clicking the Retro Mode button.

Clicking Surprise Me reveals a random fun fact from a predefined list of retro trivia.

Setup Instructions
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/retro-rewind.git
cd retro-rewind
Add your Spotify credentials:
In script.js, replace the placeholders with your own Spotify client_id and client_secret.

Replace the Unsplash API key:
In retro.js, update the ACCESS_KEY variable with your Unsplash API access key.

Run the app:
Open index.html in your web browser to get started.

Notes
This project uses the client credentials flow from Spotify. It can only access public tracks and does not support personalized features like user playlists or saved tracks.

All API calls are made from the frontend. No backend/server is used in this project.








