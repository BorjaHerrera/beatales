import { API } from '../API/API';
import { handleError } from './handleError';

export const createSong = async (e) => {
  e.preventDefault();
  const form = e.target;

  const nameInput = form.querySelector('.song-name-form input');
  const storyInput = form.querySelector('.textarea-form');
  const youtubeInput = form.querySelector('.song-youtube-form input');

  console.log('nameInput:', nameInput);
  console.log('storyInput:', storyInput);
  console.log('youtubeInput:', youtubeInput);

  const body = {
    name: nameInput.value.trim(),
    story: storyInput.value.trim(),
    youtube: youtubeInput.value.trim()
  };

  if (!body.name || !body.story || !body.youtube) {
    handleError(form, 'Todos los campos son obligatorios.');
    return;
  }

  try {
    const res = await API({
      endpoint: '/',
      body,
      method: 'POST',
      token: localStorage.getItem('token')
    });

    if (res) {
      console.log('Canción creada:', res);

      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.textContent = '¡Canción subida correctamente!';
      document.body.appendChild(successMessage);

      setTimeout(() => {
        successMessage.style.display = 'none';
        window.location.href = '/home';
      }, 2000);

      form.reset();
    }
  } catch (error) {
    handleError(form, error);
    form.reset();
  }
};
