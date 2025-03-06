import { header } from './components/header/header';
import { Home } from './pages/Home/Home';
import { popstate } from './utils/listeners/popState';
import './style.css';
import { Main } from './components/Main/main';

header();
Main();
Home();
popstate();
