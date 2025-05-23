import { printFavorites } from '../../components/printFavorites/printFavorites';
import { createUserActions } from '../../components/userActions/createUserActions';
import { API } from '../../utils/API/API';
import { createPage } from '../../utils/functions/createPage';
import { logout } from '../../utils/functions/logout';
import { printUserAvatar } from '../../utils/functions/userAvatar';
import './User.css';

export const User = () => {
  const section = createPage('user-section');
  const id = window.location.pathname.split('/').pop();
  console.log('ID extraído:', id);

  section.innerHTML = '';

  const printUser = async () => {
    try {
      const user = await API({
        endpoint: `/usuarios/${id}`,
        method: 'GET',
        token: localStorage.getItem('token')
      });

      const userH3 = document.createElement('h3');
      userH3.className = 'h3-user';
      userH3.textContent = `Hola, ${
        user.name.charAt(0).toUpperCase() + user.name.slice(1)
      }`;

      const userAvatar = printUserAvatar(user);
      userAvatar.classList.add('user-page-avatar');

      const userSectionContent = document.createElement('div');
      userSectionContent.className = 'user-section-content';

      const userActions = createUserActions(id, userSectionContent);

      const logoutButton = document.createElement('button');
      logoutButton.className = 'logout-button';
      logoutButton.classList.add('main-button');
      logoutButton.textContent = 'Cerrar sesión';
      logoutButton.addEventListener('click', logout);

      section.append(
        userH3,
        userAvatar,
        userActions,
        userSectionContent,
        logoutButton
      );

      printFavorites({ id, userSectionContent });
    } catch (error) {
      console.error('Error al obtener el usuario por id:', error);
    }
  };

  printUser();

  return section;
};
