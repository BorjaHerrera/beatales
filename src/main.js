import { header } from './components/header/header';
import { Home } from './pages/Home/Home';
import { popstate } from './utils/listeners/popState';
import { MainContainer } from './components/mainContainer/mainContainer';
import './style.css';
import { checkLoading } from './utils/functions/checkLoading';

const init = async () => {
  await checkLoading();
  header();
  MainContainer();
  Home();
  popstate();
};

init();
