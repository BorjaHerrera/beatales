import { header } from './components/header/header';
import { Home } from './pages/Home/Home';
import { popstate } from './utils/listeners/popState';
import { MainContainer } from './components/mainContainer/mainContainer';
import './style.css';
import { validateToken } from './utils/functions/validateToken';

const init = async () => {
  await validateToken();
  header();
  MainContainer();
  Home();
  popstate();
};

init();
