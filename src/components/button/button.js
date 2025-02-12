import './button.css';

export const button = ({ text, type = 'button', funcion, extraClass = '' }) => {
  const button = document.createElement('button');
  button.classList.add('main-button');

  if (extraClass) {
    button.classList.add(extraClass);
  }
  button.textContent = text;
  button.type = type;

  if (type === 'button' && funcion) {
    button.addEventListener('click', funcion);
  }

  return button;
};
