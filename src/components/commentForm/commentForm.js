import { submitComment } from '../../utils/functions/submitComment';
import { button } from '../button/button';
import { fieldForm } from '../fileForm/fileForm';
import './commentForm.css';

export const commentForm = (form) => {
  form.className = 'comment-form';

  const commentField = fieldForm({
    type: 'textarea',
    placeholder: 'Escribe un comentario...'
  });
  commentField.classList.add('form-song-comment');
  form.appendChild(commentField);

  const submitButton = button({ text: '>', type: 'submit' });
  form.appendChild(submitButton);
  submitButton.classList.add('submit-comment-song');
  form.addEventListener('submit', submitComment);
};
