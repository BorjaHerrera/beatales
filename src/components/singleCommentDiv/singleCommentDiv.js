import { printSingleComment } from '../printSingleComment/printSingleComment';
import './singleCommentDiv.css';

export const createSingleCommentDiv = async () => {
  const singleCommentDiv = document.createElement('div');
  singleCommentDiv.className = 'single-comment-div';

  const userSingleComment = await printSingleComment();

  singleCommentDiv.append(userSingleComment);

  return singleCommentDiv;
};
