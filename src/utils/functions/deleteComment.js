import { API } from '../API/API';
import { printComment } from './printComment';

export const deleteComent = async ({ commentId, songNormalizedName }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    console.log('No puedes eliminar este comentario');
    return;
  }

  try {
    await API({
      endpoint: `/comentarios/${commentId}`,
      method: 'delete',
      token
    });

    const commentToDelete = document.querySelector(`#comment-${commentId}`);
    if (commentToDelete) {
      commentToDelete.remove();
    }
    printComment(songNormalizedName);
  } catch (error) {
    console.error('Error al eliminar el comentario:', error);
  }
};
