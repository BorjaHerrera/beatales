import { printNewSongForm } from '../../components/printNewSongForm/printNewSongForm';
import { printFavorites } from '../../components/printFavorites/printFavorites';
import { printMySongs } from '../../components/printMySongs/printMySongs';

export const userListeners = ({
  userFavorites,
  userSongs,
  createSong,
  id,
  userSectionContent
}) => {
  userFavorites.addEventListener('click', () => {
    userSectionContent.innerHTML = '';
    printFavorites({ id, userSectionContent });
  });

  userSongs.addEventListener('click', () => {
    userSectionContent.innerHTML = '';
    printMySongs({ id, userSectionContent });
  });

  createSong.addEventListener('click', () => {
    userSectionContent.innerHTML = '';
    printNewSongForm(userSectionContent);
  });
};
