import { navigate } from '../../utils/functions/navigate';
import { routes } from '../../utils/routes/routes';
import './header.css';

export const header = () => {
  if (document.getElementById('header')) return; // Evita duplicados

  const header = document.createElement('header');
  header.id = 'header';

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
    : routes.filter(
        (route) =>
          route.path === '/' ||
          route.path === '/login' ||
          route.path === '/registro'
      );

  for (const route of filteredRoutes) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'nav-link';
    a.href = route.path;
    a.textContent = route.text;

    a.addEventListener('click', (e) =>
      navigate(e, { path: route.path, page: route.page })
    );

    li.appendChild(a);
    ul.appendChild(li);
  }

  nav.appendChild(ul);
  header.appendChild(nav);
  document.body.appendChild(header);

  return header;
};
