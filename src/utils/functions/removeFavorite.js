import { API } from '../API/API';

export const removeFavorite = async (songId, userId) => {
  try {
    const response = await API({
      endpoint: `/usuarios/${userId}/favoritas/`,
      method: 'DELETE',
      token: localStorage.getItem('token'),
      body: { songId }
    });

    if (response.status === 200) {
      console.log('Canción eliminada de favoritos');
      return true;
    } else {
      console.log('La canción ya no está en favoritos', response.message);
      return false;
    }
  } catch (error) {
    console.error('Error al eliminar favorito:', error);
    return false;
  }
};
