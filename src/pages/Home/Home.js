import { API } from '../../utils/API/API';
import { createPage } from '../../utils/functions/createPage';
import { extractYouTubeID } from '../../utils/functions/extractYouTube';
import { navigate } from '../../utils/functions/navigate';
import { Login } from '../Login/Login';

import { Song } from '../Song/Song';
import './Home.css';

export const Home = () => {
  const section = createPage('home-section');

  const description = () => {
    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'description';

    const title = document.createElement('h1');
    title.textContent = 'The BeaTales Experience';
    title.className = 'h1-description';

    const text = document.createElement('p');
    text.textContent =
      'Sumérgete en la magia de la banda más icónica de todos los tiempos, donde sus canciones no solo definieron una era, sino que también abrieron puertas a historias fascinantes. Descubre los secretos, anécdotas y curiosidades que inspiraron sus composiciones.';

    text.className = 'p-description';

    const img = document.createElement('img');
    img.className = 'beatles-img';
    img.src = './assets/beatles.png';

    descriptionContainer.append(title, img, text);
    section.appendChild(descriptionContainer);
  };

  const printSongs = async () => {
    const songsContainer = document.createElement('div');
    songsContainer.id = 'songs-container';

    const ul = document.createElement('ul');
    ul.className = 'songs-list';

    try {
      const songList = await API({ endpoint: '/', method: 'GET' });

      for (const song of songList) {
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

        songsContainer.appendChild(ul);
      }
    } catch (error) {
      console.error('Error al obtener canciones:', error);
    }

    section.appendChild(songsContainer);
  };
  description();
  printSongs();
};
