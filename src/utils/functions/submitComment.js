import { printSingleComment } from '../../components/printSingleComment/printSingleComment';
import { API } from '../API/API';
import { handleError } from './handleError';
import { loginRedirect } from './loginRedirect';

export const submitComment = async (e) => {
  e.preventDefault();

  const isRedirected = loginRedirect();
  if (isRedirected) return;

  const form = e.target;

  const normalizedName = window.location.pathname.split('/').pop();
  let songId;

  try {
    const response = await API({
      endpoint: `/cancion/${normalizedName}`,
      method: 'GET'
    });
    songId = response._id;
  } catch (error) {
    console.log(error);
    handleError(form, 'Error al obtener la canción.');
  }

  if (!songId) {
    handleError(form, 'No se pudo obtener el ID de la canción.');
    return;
  }

  const commentInput = form.querySelector('.textarea-form');
  const body = { text: commentInput.value.trim(), song: songId };

  if (!body.text) {
    handleError(form, 'Todos los campos son obligatorios.');
    return;
  }

  try {
    const res = await API({
      endpoint: '/comentarios/',
      body,
      method: 'POST',
      token: localStorage.getItem('token')
    });
    form.reset();

    const commentsContainer = document.querySelector('.single-comment-div');
    if (commentsContainer) {
      commentsContainer.innerHTML = '';
      const updatedComments = await printSingleComment();
      commentsContainer.appendChild(updatedComments);
    }
  } catch (error) {
    console.log('Error:', error);
  }
};
