import { printFavorites } from '../printFavorites/printFavorites';
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

  let isFavorite = favorites?.some((fav) => fav._id === songId) || false;

  if (isFavorite) {
    heart.src = '/assets/corazon-rojo.png';
    heart.className = 'red-heart';
  }

  heart.addEventListener('click', async () => {
    if (isFavorite) {
      await removeFavorite(songId, userId);
      heart.src = '/assets/corazon-blanco.png';
      heart.className = 'white-heart';
      isFavorite = false;

      const userSectionContent = document.querySelector(
        '.user-section-content'
      );
      if (userSectionContent) {
        await printFavorites({ id: userId, userSectionContent });
      }
    } else {
      await addFavorite(songId, userId);
      heart.src = '/assets/corazon-rojo.png';
      heart.className = 'red-heart';
      isFavorite = true;
    }
  });

  return heart;
};
