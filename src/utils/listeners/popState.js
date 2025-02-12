import { Home } from '../../pages/Home/Home';
import { routes } from '../routes/routes';

export const popstate = () => {
  window.addEventListener('popstate', () => {
    const path = window.location.pathname;

    // Buscar una ruta coincidente
    const link = routes.find((route) => {
      const regex = new RegExp(`^${route.path.replace(/:\w+/g, '([^/]+)')}$`);
      return regex.test(path);
    });

    if (link) {
      link.page();
    } else {
      Home();
      window.history.pushState('', '', '/');
    }
  });
};
