import { createSpinner } from '../../components/spinner/spinner';
import { User } from '../../pages/User/User';
import { API } from '../API/API';
import { handleError } from './handleError';
import { navigate } from './navigate';
import { renderHeader } from './renderHeader';
export const loggedIn = async (e) => {
  e.preventDefault();
  console.log('Formulario enviado:', e);

  const form = e.target;
  const emailInput = form.querySelector('.input-form[type="email"]');
  const passwordInput = form.querySelector(
    '.input-form[type="password"], .input-form[type="text"]'
  );

  const body = {
    email: emailInput.value,
    password: passwordInput.value
  };

  console.log('Cuerpo enviado:', body);

  const spinner = createSpinner();
  form.appendChild(spinner);

  try {
    const res = await API({
      endpoint: '/usuarios/login',
      body: body,
      method: 'POST'
    });

    console.log('Respuesta del servidor:', res);

    if (res.user?.name) {
      console.log('Token recibido:', res.token);
      console.log('UserId recibido:', res.user._id);

      localStorage.setItem('name', res.user.name);
      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.user._id);
    }
    const userProfilePath = `/usuarios/${res.user._id}`;

    navigate(e, { path: userProfilePath, page: User });

    renderHeader();
  } catch (error) {
    renderHeader();
    console.error('Error en la solicitud:', error);
    handleError(form, error);
  } finally {
    spinner.remove();
  }
};
