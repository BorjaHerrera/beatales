import { printFavorites } from '../printFavorites/printFavorites';
import { API } from '../../utils/API/API';
import { addFavorite } from '../../utils/functions/addFavorite';
import { navigate } from '../../utils/functions/navigate';
import { removeFavorite } from '../../utils/functions/removeFavorite';

import './heart.css';
import { Login } from '../../pages/Login/Login';

export const heartButton = async (songId, favorites = null) => {
  const heart = document.createElement('img');
  heart.className = 'white-heart';
  heart.src = '/assets/corazon-blanco.png';

  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  if (!token) {
    heart.addEventListener('click', (e) => {
      navigate(e, { path: '/login', page: Login });
    });
    return heart;
  }

  if (!userId) {
    console.error('User ID is not available');
    return heart;
  }

  const isFavorite = async () => {
    if (favorites) {
      return favorites.some((fav) => fav._id === songId);
    }
    try {
      const response = await API({
        endpoint: `/usuarios/${userId}/favoritas/`,
        method: 'GET',
        token: localStorage.getItem('token')
      });

      const isFavorite = response.favorites.some(
        (favorite) => favorite._id === songId
      );
      console.log(`Song ID: ${songId} is favorite: ${isFavorite}`);
      return isFavorite;
    } catch (error) {
      console.error('Error al verificar favoritos:', error);
      return false;
    }
  };

  let favorite = await isFavorite(songId, userId);

  if (favorite) {
    heart.src = '/assets/corazon-rojo.png';
    heart.className = 'red-heart';
  } else {
    heart.src = '/assets/corazon-blanco.png';
  }

  heart.addEventListener('click', async () => {
    favorite = await isFavorite(songId, userId);

    if (favorite) {
      await removeFavorite(songId, userId);
      heart.src = '/assets/corazon-blanco.png';
      // prettier-ignore
      const userSectionContent = document.querySelector('.user-section-content');
      await printFavorites({ id: userId, userSectionContent });
    } else {
      await addFavorite(songId, userId);
      heart.src = '/assets/corazon-rojo.png';
    }
  });

  return heart;
};
