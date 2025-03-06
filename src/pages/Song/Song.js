import { heartButton } from '../../components/heart/heart';
import { createStoryCommentSection } from '../../components/storyCommentSection/storyCommentSection';
import { API } from '../../utils/API/API';
import { createPage } from '../../utils/functions/createPage';
import { extractYouTubeID } from '../../utils/functions/extractYouTube';
import './Song.css';

export const Song = () => {
  const section = createPage('song-section');

  const normalizedName = window.location.pathname.split('/').pop();

  section.innerHTML = '';

  const printSong = async () => {
    const songNameContainer = document.createElement('article');
    songNameContainer.className = 'selected-song';
    try {
      const song = await API({
        endpoint: `/cancion/${normalizedName}`,
        method: 'GET'
      });

      const youtubeContainer = document.createElement('div');
      youtubeContainer.className = 'youtube-div';

      const iframeYoutube = document.createElement('iframe');
      const youtubeID = extractYouTubeID(song.youtube);
      iframeYoutube.src = `https://www.youtube.com/embed/${youtubeID}`;
      iframeYoutube.className = 'one-youtube-iframe';
      iframeYoutube.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframeYoutube.setAttribute('allowfullscreen', 'true');

      const songData = document.createElement('div');
      songData.className = 'song-data';
      const songTitle = document.createElement('h2');
      songTitle.textContent = song.name;
      songTitle.className = 'one-song-title';

      const heart = await heartButton(song._id);

      const heartContainer = document.createElement('div');
      heartContainer.className = 'heart-container';

      const heartText = document.createElement('span');
      heartText.className = 'heart-text';
      heartText.textContent = 'Añadir a favoritos';

      heartContainer.append(heartText, heart);

      const beatles = document.createElement('h3');
      beatles.className = 'beatles-h3';
      beatles.textContent = 'The Beatles';

      youtubeContainer.appendChild(iframeYoutube);
      songData.append(beatles, songTitle, heartContainer);

      songNameContainer.appendChild(youtubeContainer);
      songNameContainer.appendChild(songData);

      const storyCommentSection = await createStoryCommentSection(
        song,
        normalizedName
      );

      section.append(songNameContainer, storyCommentSection);
    } catch (error) {
      console.error('Error al obtener canción por nombre:', error);
    }
  };

  printSong();
};
