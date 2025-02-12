import { deleteComent } from '../../utils/functions/deleteComment';
import { postComment } from '../../utils/functions/postComment';
import { printComment } from '../../utils/functions/printComment';
import { printFirstLetter } from '../../utils/functions/printInitial';
import { printName } from '../../utils/functions/printName';
import { button } from '../button/button';
import { commentForm } from '../commentForm/commentForm';

import './commentsDiv.css';

export const createCommentsDiv = (normalizedName) => {
  const commentsDiv = document.createElement('div');
  commentsDiv.className = 'story-comments';

  const form = document.createElement('form');
  commentForm(form);
  form.addEventListener('submit', postComment);

  const circleLetter = printFirstLetter();

  const commentInfo = document.createElement('div');
  commentInfo.className = 'comment-info';

  const name = printName();
  const comment = printComment(normalizedName);
  //prettier-ignore
  const deleteButton = button({ text: 'Eliminar comentario', type: 'button', funcion: deleteComent });
  deleteButton.classList.add('secondary-button');

  commentInfo.appendChild(name);
  commentInfo.appendChild(comment);
  commentInfo.appendChild(deleteButton);

  commentsDiv.appendChild(form);
  commentsDiv.appendChild(circleLetter);
  commentsDiv.appendChild(commentInfo);

  return commentsDiv;
};
