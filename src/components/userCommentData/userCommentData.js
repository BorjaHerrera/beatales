import { printName } from '../../utils/functions/printName';
import { printUserAvatar } from '../../utils/functions/userAvatar';
import './userCommentData.css';

export const createUserCommentData = (user) => {
  const userCommentData = document.createElement('div');
  userCommentData.className = 'user-comment-data';

  const avatar = printUserAvatar(user);
  const printUserName = printName(user.name);

  userCommentData.append(avatar, printUserName);

  return userCommentData;
};
