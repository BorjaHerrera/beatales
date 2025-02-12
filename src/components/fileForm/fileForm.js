import { passwordVisibility } from '../passwordVisibility/passwordVisibility';
import './fileForm.css';
// prettier-ignore
export const fieldForm = ({ labelText, type = 'text', required = 'true', placeholder = "", autocomplete = '' }) => {
  const fieldForm = document.createElement('div');
  fieldForm.className = 'field-form';

  const label = document.createElement('label');
  label.className = 'label-form';
  label.textContent = labelText;

  // Crear un contenedor para el input y el icono de visibilidad de contraseña
  const inputContainer = document.createElement('div');
  inputContainer.className = 'input-container';

  const input = document.createElement('input');
  input.className = 'input-form';
  input.type = type;
  input.required = required;
  input.placeholder = placeholder;
  input.autocomplete = autocomplete;

  if (labelText?.toLowerCase() === 'name') {
    input.classList.add('register-name');
  }


  // Si es un campo de contraseña, agregar el icono dentro del contenedor
  if (type === 'password') {
    const passwordEye = passwordVisibility(input);
    inputContainer.appendChild(input);
    inputContainer.appendChild(passwordEye);
  } else {
    inputContainer.appendChild(input);
  }

  fieldForm.appendChild(label);
  fieldForm.appendChild(inputContainer);

  return fieldForm;
};
