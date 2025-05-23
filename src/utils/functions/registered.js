import { createSpinner } from '../../components/spinner/spinner';
import { User } from '../../pages/User/User';
import { API } from '../API/API';
import { handleError } from './handleError';
import { navigate } from './navigate';
import { renderHeader } from './renderHeader';

export const registered = async (e) => {
  e.preventDefault();

  const form = e.target;

  const nameInput = form.querySelector('.register-name');
  const emailInput = form.querySelector('.input-form[type=email]');
  const passwordInput = form.querySelector('.input-form[type=password]');
  const imageInput = form.querySelector('.input-file');

  const formData = new FormData();
  formData.append('name', nameInput.value);
  formData.append('email', emailInput.value);
  formData.append('password', passwordInput.value);
  if (imageInput && imageInput.files[0]) {
    formData.append('profileImage', imageInput.files[0]);
  }

  const spinner = createSpinner();
  form.appendChild(spinner);

  try {
    const res = await API({
      endpoint: '/usuarios/registro',
      body: formData,
      method: 'POST',
      isJSON: false
    });

    if (res.user && res.token) {
      localStorage.setItem('name', res.user.name);
      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.user._id);

      const userProfilePath = `/usuarios/${res.user._id}`;
      navigate(e, { path: userProfilePath, page: User });

      renderHeader();
    } else {
      console.error('La respuesta no contiene el usuario o el token esperado.');
    }
  } catch (error) {
    handleError(form, error);
  } finally {
    spinner.remove();
  }
};
