import { button } from '../button/button';
import { fieldForm } from '../fileForm/fileForm';
import './commentForm.css';

export const commentForm = (form) => {
  form.className = 'comment-form';

  const commentField = fieldForm({
    type: 'text',
    placeholder: 'Escribe un comentario...'
  });
  commentField.classList.add('comment-field');

  const submitButton = button({ text: '>', type: 'submit' });
  form.append(commentField, submitButton);
};
