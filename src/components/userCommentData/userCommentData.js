import { printFirstLetter } from '../../utils/functions/printInitial';
import { printName } from '../../utils/functions/printName';
import './userCommentData.css';

export const createUserCommentData = (userName) => {
  const userCommentData = document.createElement('div');
  userCommentData.className = 'user-comment-data';

  const printInitial = printFirstLetter(userName);
  const printUserName = printName(userName);

  userCommentData.append(printInitial, printUserName);

  return userCommentData;
};
