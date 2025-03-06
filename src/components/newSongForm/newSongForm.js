import { createSong } from '../../utils/functions/createSong';
import { button } from '../button/button';
import { fieldForm } from '../fileForm/fileForm';
import './newSongForm.css';

export const newSongForm = (form) => {
  form.className = 'new-song-form';

  const nameField = fieldForm({ labelText: 'Título', type: 'text' });
  nameField.classList.add('song-name-form');

  const storyField = fieldForm({ labelText: 'Historia', type: 'textarea' });
  storyField.classList.add('song-story-form');

  const youtubeField = fieldForm({
    labelText: 'Enlace de Youtube Music',
    type: 'url'
  });
  youtubeField.classList.add('song-youtube-form');

  form.append(nameField, storyField, youtubeField);

  const submitButton = button({ text: 'Crear canción', type: 'submit' });
  form.appendChild(submitButton);
  submitButton.classList.add('new-song-button');

  form.addEventListener('submit', createSong);
};
