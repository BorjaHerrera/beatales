import { Song } from '../pages/Song';
import { Login } from '../pages/Login';
import { navigate } from '../../utils/functions/navigate';
import { extractYouTubeID } from '../../utils/functions/extractYouTube';

export const renderSongs = ({ createPage, sectionId, songs, container }) => {
  const section = createPage(sectionId);
  container.innerHTML = '';

  const ul = document.createElement('ul');
  ul.className = 'songs-list';

  // Procesamos cada canción
  for (const song of songs) {
    const li = document.createElement('li');
    li.className = 'single-song';

    const youtubeID = extractYouTubeID(song.youtube);

    const youtubeContainer = document.createElement('div');
    youtubeContainer.className = 'youtube-container';

    const thumbnail = document.createElement('img');
    thumbnail.src = `https://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`;
    thumbnail.className = 'youtube-thumbnail';
    thumbnail.alt = `Miniatura de ${song.name}`;

    const youtubeLink = document.createElement('a');
    youtubeLink.href = `/cancion/${song.normalizedName}`;
    youtubeLink.className = 'youtube-link';

    youtubeLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(e, {
        path: `/cancion/${song.normalizedName}`,
        page: Song
      });
    });

    youtubeLink.appendChild(thumbnail);

    const songName = document.createElement('p');
    songName.textContent = song.name;
    songName.className = 'song-name';

    const songLink = document.createElement('a');
    songLink.href = `/cancion/${song.normalizedName}`;
    songLink.textContent = 'Ver historia';
    songLink.className = 'song-link main-button';

    songLink.addEventListener('click', (e) => {
      navigate(e, {
        path: `/cancion/${song.normalizedName}`,
        page: Song
      });
    });

    const musicImg = document.createElement('img');
    musicImg.src = `./assets/musica.png`;
    musicImg.className = 'music-img';

    musicImg.addEventListener('click', (e) => {
      navigate(e, {
        path: `/cancion/${song.normalizedName}`,
        page: Song
      });
    });

    const heart = document.createElement('img');
    heart.className = 'white-heart';
    heart.src = './assets/corazon-blanco.png';

    heart.addEventListener('click', (e) => {
      navigate(e, {
        path: '/login',
        page: Login
      });
    });

    li.appendChild(youtubeContainer);
    youtubeContainer.appendChild(youtubeLink);
    li.append(songName, heart, musicImg, songLink);
    ul.appendChild(li);
  }

  container.appendChild(ul);
  sectionId.appendChild(container);
};
