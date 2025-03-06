import { API } from '../../utils/API/API';
import { createUserCommentData } from '../userCommentData/userCommentData';
import './printSingleComment.css';

export const printSingleComment = async () => {
  const userSingleComment = document.createElement('div');
  userSingleComment.className = 'user-single-comment';

  const ul = document.createElement('ul');
  ul.className = 'ul-single-comment';

  const normalizedName = window.location.pathname.split('/').pop();

  try {
    const res = await API({
      endpoint: `/comentarios/cancion/${normalizedName}`,
      method: 'GET',
      token: localStorage.getItem('token')
    });

    const songComments = res;

    if (!Array.isArray(res)) {
      console.error('La respuesta no es un array de comentarios.');
      return userSingleComment;
    }

    for (const comment of songComments) {
      const li = document.createElement('li');
      li.className = 'li-single-comment';

      const commentText = document.createElement('p');
      commentText.className = 'comment-text';
      commentText.textContent = comment.text;

      const userCommentData = createUserCommentData(comment.user.name);

      li.append(userCommentData, commentText);
      ul.appendChild(li);
    }
    userSingleComment.appendChild(ul);
  } catch (error) {
    console.error('Error al obtener los comentarios de cada canción:', error);
  }
  return userSingleComment;
};
