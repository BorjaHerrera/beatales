import { API } from '../API/API';
import { loginRedirect } from './loginRedirect';
import { printComment } from './printComment';

export const postComment = async (e) => {
  e.preventDefault();

  const isRedirected = loginRedirect();

  // Si se redirige, detenemos la ejecución de la función
  if (isRedirected) return;

  const form = e.target;
  const commentInput = form.querySelector('.comment-field input');
  const commentText = commentInput.value.trim();

  if (!commentText) return;

  const normalizedName = window.location.pathname.split('/').pop();

  try {
    const songResponse = await API({
      endpoint: `/cancion/${normalizedName}`,
      method: 'GET',
      isJSON: true
    });

    if (!songResponse || !songResponse._id) {
      throw new Error('No se pudo obtener la canción');
    }

    const songId = songResponse._id;
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Usuario no autenticado');
    }

    const body = {
      song: songId,
      text: commentText
    };

    await API({
      endpoint: '/comentarios',
      method: 'POST',
      body,
      isJSON: true,
      token
    });

    commentInput.value = '';
    const contentContainer = document.querySelector('.content-container');

    if (contentContainer) {
      contentContainer.innerHTML = '';
      const commentsDiv = await printComment(normalizedName);
      contentContainer.appendChild(commentsDiv);
    }
  } catch (error) {
    console.error('Error al enviar el comentario:', error);
  }
};
