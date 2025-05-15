import { printFirstLetter } from './printInitial';

export const printUserAvatar = (user) => {
  const avatarContainer = document.createElement('div');
  avatarContainer.className = 'avatar-container';

  if (user.profileImage) {
    const avatarImg = document.createElement('img');
    avatarImg.src = user.profileImage;
    avatarImg.alt = user.name;
    avatarImg.className = 'avatar-image';

    avatarContainer.appendChild(avatarImg);
  } else {
    const initial = printFirstLetter(user.name);
    avatarContainer.appendChild(initial);
  }
  return avatarContainer;
};
