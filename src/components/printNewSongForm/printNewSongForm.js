import { newSongForm } from '../newSongForm/newSongForm';
import './printNewSongForm.css';

export const printNewSongForm = (container) => {
  const songFormContainer = document.createElement('div');
  songFormContainer.className = 'song-form-container';

  const form = document.createElement('form');
  newSongForm(form);

  songFormContainer.appendChild(form);
  container.appendChild(songFormContainer);
};
