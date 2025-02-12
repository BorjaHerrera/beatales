import { button } from '../button/button';
import { fieldForm } from '../fileForm/fileForm';
import './loginForm.css';

export const loginForm = (form) => {
  form.className = 'login-form';

  // prettier-ignore
  const emailField = fieldForm({ labelText: 'Correo electrónico', type: 'email', required: 'true',autocomplete: 'current-password' });

  // prettier-ignore
  const passwordField = fieldForm({ labelText: 'Contraseña', type: 'password', required: 'true' });

  form.appendChild(emailField);
  form.appendChild(passwordField);

  // prettier-ignore
  const submitButton = button({ text: 'Inicia sesión', type: 'submit', extraClass: "secondary-button"});

  form.appendChild(submitButton);
};
