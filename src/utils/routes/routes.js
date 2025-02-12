import { Home } from '../../pages/Home/Home';
import { Login } from '../../pages/Login/Login';
import { Register } from '../../pages/Register/Register';
import { Song } from '../../pages/Song/Song';
import { User } from '../../pages/User/User';

export const routes = [
  {
    path: '/',
    text: 'get back',
    page: Home
  },
  {
    path: '/login',
    text: 'iniciar sesión',
    page: Login
  },
  {
    path: '/registro',
    text: 'registro',
    page: Register
  },

  {
    path: '/cancion/:normalizedName',
    text: 'Canción',
    page: Song
  },

  {
    path: '/usuarios/:id',
    text: 'mi perfil',
    page: User
  }
];
