import './passwordVisibility.css';

export const passwordVisibility = (input) => {
  const passwordEye = document.createElement('div');
  passwordEye.className = 'password-eye-container';
  const toggleEye = document.createElement('img');
  toggleEye.src = '/assets/open-eye.png';
  toggleEye.className = 'toggle-eye';
  toggleEye.alt = 'Mostrar contraseña';

  toggleEye.addEventListener('click', () => {
    if (input.type === 'password') {
      input.type = 'text';
      toggleEye.src = '/assets/close-eye.png';
      toggleEye.alt = 'Ocultar contraseña';
    } else {
      input.type = 'password';
      toggleEye.src = '/assets/open-eye.png';
      toggleEye.alt = 'Mostrar contraseña';
    }
  });

  passwordEye.appendChild(toggleEye);

  return passwordEye;
};
