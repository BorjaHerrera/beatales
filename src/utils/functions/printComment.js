import { API } from '../API/API';

export const printComment = async (normalizedName) => {
  const commentContainer = document.createElement('div');
  commentContainer.className = 'comment-section';

  const ul = document.createElement('ul');
  ul.className = 'comment-list';

  try {
    const commentResponse = await API({
      endpoint: `/comentarios/cancion/${normalizedName}`,
      method: 'GET',
      isJSON: true
    });

    for (const comment of commentResponse) {
      const li = document.createElement('li');
      li.className = 'single-comment';
      li.id = `comment-${comment._id}`;
      li.textContent = comment.text;
      ul.appendChild(li);
    }
    commentContainer.appendChild(ul);
  } catch (error) {
    console.error('Error al obtener comentarios:', error);
  }

  console.log(commentContainer);
  return commentContainer;
};
