import { API } from '../API/API';

export const addFavorite = async (songId, userId) => {
  try {
    const response = await API({
      endpoint: `/usuarios/${userId}/favoritas/`,
      method: 'POST',
      token: localStorage.getItem('token'),
      body: { favorites: [songId] }
    });

    return response.favorites.some((favorite) => favorite._id === songId);
  } catch (error) {
    console.error('Error al actualizar favoritos:', error);
    return false;
  }
};
