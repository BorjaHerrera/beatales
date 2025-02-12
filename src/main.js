import { Main } from './components/main/main';
import { header } from './components/header/header';
import { Home } from './pages/Home/Home';
import { popstate } from './utils/listeners/popState';
import './style.css';

header();
Main();
Home();
popstate();
