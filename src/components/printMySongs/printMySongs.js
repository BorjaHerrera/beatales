import { Song } from '../../pages/Song/Song';
import { API } from '../../utils/API/API';
import { deleteSong } from '../../utils/functions/deleteSong';
import { extractYouTubeID } from '../../utils/functions/extractYouTube';
import { navigate } from '../../utils/functions/navigate';
import { button } from '../button/button';
import { heartButton } from '../heart/heart';
import './printMySongs.css';

export const printMySongs = async ({ id, userSectionContent }) => {
  userSectionContent.innerHTML = '';

  const ul = document.createElement('ul');
  ul.className = 'uploaded-songs-ul';

  try {
    const res = await API({
      endpoint: `/usuarios/${id}/subidas`,
      method: 'GET',
      token: localStorage.getItem('token')
    });

    const uploadedSongs = res;

    if (!uploadedSongs || uploadedSongs.length === 0) {
      const noUploadedMessage = document.createElement('p');
      noUploadedMessage.textContent = 'Aún no has subido ninguna canción.';
      userSectionContent.appendChild(noUploadedMessage);
      return;
    }

    for (const song of uploadedSongs) {
      const li = document.createElement('li');
      li.className = 'uploaded-songs-li';
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

      const deleteSongButton = button({
        text: 'Eliminar',
        type: 'button',
        funcion: () =>
          deleteSong({
            id: song._id,
            userId: id,
            userSectionContent: userSectionContent
          }),
        extraClass: 'delete-song'
      });

      songDetailsContainer.append(heart, musicImg, deleteSongButton);

      songInfoContainer.append(songNameContainer, songDetailsContainer);

      li.appendChild(youtubeContainer);
      youtubeContainer.appendChild(youtubeLink);
      li.appendChild(songInfoContainer);

      ul.appendChild(li);
    }

    userSectionContent.appendChild(ul);
  } catch (error) {
    console.error('Error al obtener las canciones favoritas:', error);
  }
};
