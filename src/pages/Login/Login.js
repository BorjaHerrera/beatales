import { loginForm } from '../../components/loginForm/loginForm';
import { createPage } from '../../utils/functions/createPage';
import { loggedIn } from '../../utils/functions/loggedIn';
import { navigate } from '../../utils/functions/navigate';
import { Register } from '../Register/Register';
import './Login.css';

export const Login = () => {
  const section = createPage('login-section');

  const h1 = document.createElement('h1');
  h1.textContent = 'THE BEATALES';
  h1.className = 'h1-register';

  const paragraph = document.createElement('p');
  paragraph.className = 'paragraph-register';
  paragraph.textContent =
    'Introduce tus dirección de correo electrónico y contraseña para iniciar sesión.';

  const form = document.createElement('form');
  form.id = 'form';
  form.innerHTML = '';

  loginForm(form);

  const terms = document.createElement('p');
  terms.textContent = 'Al continuar, aceptas los Términos de uso de BeaTales';
  terms.className = 'terms';

  const notMember = document.createElement('p');
  notMember.className = 'not-member';
  notMember.textContent = '¿Todavía no eres miembro?';

  const createAccount = document.createElement('a');
  createAccount.className = 'create-account';
  createAccount.classList.add('secondary-button');
  createAccount.href = `/usuarios/registro`;
  createAccount.textContent = 'Crear cuenta';

  createAccount.addEventListener('click', (e) => {
    navigate(e, {
      path: '/usuarios/registro',
      page: Register
    });
  });

  form.addEventListener('submit', loggedIn);

  section.append(h1, paragraph, form, terms, notMember, createAccount);
};
