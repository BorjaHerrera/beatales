import './createSongComments.css';

import { commentForm } from '../commentForm/commentForm';
import { createSingleCommentDiv } from '../singleCommentDiv/singleCommentDiv';

export const createSongComments = async () => {
  const songComments = document.createElement('section');
  songComments.className = 'song-comments';
  const form = document.createElement('form');
  commentForm(form);

  const singleCommentDiv = await createSingleCommentDiv();

  songComments.append(form, singleCommentDiv);

  return songComments;
};
