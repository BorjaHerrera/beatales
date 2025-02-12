import { API } from '../../utils/API/API';
import { createPage } from '../../utils/functions/createPage';
import './User.css';

export const User = () => {
  const section = createPage('user-section');
  const id = window.location.pathname.split('/').pop();

  if (!id) {
    console.error('ID de usuario no encontrado en la URL');
    section.innerHTML = '<p>Error: ID de usuario no encontrado.</p>';
    return section;
  }

  section.innerHTML = '';

  const userContainer = document.createElement('article');
  userContainer.className = 'user-container';

  const printUser = async () => {
    try {
      const user = await API({
        endpoint: `/usuarios/${id}`,
        method: 'GET',
        token: localStorage.getItem('token')
      });

      const userHero = document.createElement('div');
      userHero.className = 'user-hero';
      userHero.textContent = `Hello ${user.name}`;

      userContainer.appendChild(userHero);
    } catch (error) {
      console.error('Error al obtener el usuario por id:', error);
      userContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  };

  section.appendChild(userContainer);
  printUser(); // Llamar a la función para obtener y mostrar los datos del usuario

  return section;
};
