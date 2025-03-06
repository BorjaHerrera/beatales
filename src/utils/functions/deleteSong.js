import { printMySongs } from '../../components/printMySongs/printMySongs';
import { API } from '../API/API';

export const deleteSong = async ({ id, userId, userSectionContent }) => {
  try {
    await API({
      endpoint: `/${id}`,
      method: 'DELETE',
      token: localStorage.getItem('token')
    });
    console.log('Canción eliminada correctamente');

    const successDelete = document.createElement('div');
    successDelete.className = 'success-delete';
    successDelete.textContent = '¡Canción eliminada correctamente!';
    document.body.appendChild(successDelete);

    setTimeout(() => {
      successDelete.remove();
    }, 2000);

    await printMySongs({ id: userId, userSectionContent });
  } catch (error) {
    console.error('Error al eliminar la canción:', error);
  }
};
