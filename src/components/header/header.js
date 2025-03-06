import { navigate } from '../../utils/functions/navigate';
import { routes } from '../../utils/routes/routes';
import './header.css';

const appContainer = document.querySelector('#app');

export const header = () => {
  let header = document.querySelector('#header');

  if (!header) {
    header = document.createElement('header');
    header.id = 'header';
  }

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  const filteredRoutes = token
    ? routes
        .filter((route) => route.path === '/' || route.path === '/usuarios/:id')
        .map((route) => ({
          ...route,
          path: route.path.replace(':id', userId)
        }))
    : routes.filter((route) => route.path === '/' || route.path === '/login');

  for (const route of filteredRoutes) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'nav-link';
    a.href = route.path;
    a.textContent = route.text;

    a.addEventListener('click', (e) => {
      navigate(e, { path: route.path, page: route.page });

      header.classList.remove('header-expanded');
      nav.classList.remove('show-menu');
    });

    li.appendChild(a);
    ul.appendChild(li);
  }

  const responsiveMenu = document.createElement('div');
  responsiveMenu.className = 'responsive-menu';

  const responsiveButton = document.createElement('span');
  responsiveButton.className = 'responsive-button';
  responsiveButton.textContent = '☰';

  nav.appendChild(ul);

  responsiveMenu.appendChild(responsiveButton);
  responsiveMenu.appendChild(nav);

  header.appendChild(responsiveMenu);

  responsiveButton.addEventListener('click', () => {
    header.classList.toggle('header-expanded');
    nav.classList.toggle('show-menu');
  });

  appContainer.prepend(header);
};
