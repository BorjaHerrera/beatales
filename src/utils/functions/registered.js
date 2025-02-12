import { User } from '../../pages/User/User';
import { API } from '../API/API';
import { handleError } from './handleError';
import { navigate } from './navigate';

export const registered = async (e) => {
  e.preventDefault();

  const form = e.target;

  const nameInput = form.querySelector('.register-name');
  const emailInput = form.querySelector('.input-form[type=email]');
  const passwordInput = form.querySelector('.input-form[type=password]');

  const body = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  };

  try {
    const res = await API({
      endpoint: '/usuarios/registro',
      body: body,
      method: 'POST'
    });

    // Verificamos que la respuesta contiene el usuario y el token
    if (res.user?.name && res.token) {
      localStorage.setItem('name', res.user.name);
      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.user._id);

      const userProfilePath = `/usuarios/${res.user._id}`;
      navigate(e, { path: userProfilePath, page: User });
    }
  } catch (error) {
    handleError(form, error);
  }
};

