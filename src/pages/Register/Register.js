import { registerForm } from '../../components/registerForm/registerForm';
import { createPage } from '../../utils/functions/createPage';
import { registered } from '../../utils/functions/registered';
import './Register.css';

export const Register = () => {
  const section = createPage('register-section');

  const h1 = document.createElement('h1');
  h1.textContent = 'THE BEATALES';
  h1.className = 'h1-register';

  const paragraph = document.createElement('p');
  paragraph.className = 'paragraph-register';
  paragraph.textContent =
    'Introduce tus datos y regístrate para unirte a la BeaTales Experiece.';

  const form = document.createElement('form');
  form.id = 'form';
  form.innerHTML = '';

  registerForm(form);

  const terms = document.createElement('p');
  terms.textContent = 'Al continuar, aceptas los Términos de uso de BeaTales';
  terms.className = 'terms';

  form.addEventListener('submit', registered);
  section.append(h1, paragraph, form, terms);
};
