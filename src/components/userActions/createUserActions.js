import './createUserActions.css';

import { userListeners } from '../../utils/listeners/userListeners';

export const createUserActions = (id, userSectionContent) => {
  const userActionsDiv = document.createElement('section');
  userActionsDiv.className = 'user-actions';

  const userFavorites = document.createElement('div');
  userFavorites.className = 'user-favorites';
  userFavorites.textContent = 'Mis favoritas';

  const userSongs = document.createElement('div');
  userSongs.className = 'user-songs';
  userSongs.textContent = 'Mis canciones';

  const createSong = document.createElement('div');
  createSong.className = 'create-song';
  createSong.textContent = 'Subir canción';

  userActionsDiv.append(userFavorites, userSongs, createSong);

  userListeners({
    userFavorites,
    userSongs,
    createSong,
    id,
    userSectionContent
  });

  return userActionsDiv;
};
