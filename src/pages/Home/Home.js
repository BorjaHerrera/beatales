import { descriptionHero } from '../../components/descriptionHero/descriptionHero';
import { heartButton } from '../../components/heart/heart';
import { createSpinner } from '../../components/spinner/spinner';
import { API } from '../../utils/API/API';
import { createPage } from '../../utils/functions/createPage';
import { extractYouTubeID } from '../../utils/functions/extractYouTube';
import { navigate } from '../../utils/functions/navigate';
import { Song } from '../Song/Song';
import './Home.css';

export const Home = () => {
  const section = createPage('home-section');

  const description = descriptionHero();
  section.appendChild(description);

  const printSongs = async () => {
    const songsContainer = document.createElement('div');
    songsContainer.id = 'songs-container';

    const spinner = createSpinner();
    spinner.classList.add('spinner-home');
    description.appendChild(spinner);

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

        const songInfoContainer = document.createElement('div');
        songInfoContainer.className = 'song-info-container';

        const songNameContainer = document.createElement('div');
        songNameContainer.className = 'song-name-container';

        const songName = document.createElement('p');
        songName.textContent = song.name;
        songName.className = 'song-name';
        songNameContainer.appendChild(songName);

        const songDetailsContainer = document.createElement('div');
        songDetailsContainer.className = 'song-details-container';

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
        musicImg.src = `/assets/musica.png`;
        musicImg.className = 'music-img';

        musicImg.addEventListener('click', (e) => {
          navigate(e, {
            path: `/cancion/${song.normalizedName}`,
            page: Song
          });
        });

        const heart = await heartButton(song._id);

        songDetailsContainer.append(heart, musicImg, songLink);

        songInfoContainer.append(songNameContainer, songDetailsContainer);

        li.appendChild(youtubeContainer);
        youtubeContainer.appendChild(youtubeLink);
        li.appendChild(songInfoContainer);

        ul.appendChild(li);
      }
      spinner.remove();
    } catch (error) {
      console.error('Error al obtener canciones:', error);
    }

    songsContainer.appendChild(ul);
    section.appendChild(songsContainer);
  };

  printSongs();
};
