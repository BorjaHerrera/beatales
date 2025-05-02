import { passwordVisibility } from '../passwordVisibility/passwordVisibility';
import './fileForm.css';
// prettier-ignore
export const fieldForm = ({ labelText, type = 'text', required = true, placeholder = "", autocomplete = '' }) => {
  const fieldForm = document.createElement('div');
  fieldForm.className = 'field-form';

  const label = document.createElement('label');
  label.className = 'label-form';
  label.textContent = labelText;

  const inputContainer = document.createElement('div');
  inputContainer.className = 'input-container';

  let input;

  if (type === 'textarea') {
    input = document.createElement('textarea');
    input.className = 'textarea-form';
  } else {
    input = document.createElement('input');
    input.className = 'input-form';
    input.type = type;
    input.autocomplete = autocomplete;

  if (labelText?.toLowerCase() === 'nombre') {
    input.classList.add('register-name');
  }
  }

  if (type === 'password') {
    input.required = true;
    const passwordEye = passwordVisibility(input);
    inputContainer.appendChild(input);
    inputContainer.appendChild(passwordEye);
  } else {
    inputContainer.appendChild(input);
    input.required = required;
    input.placeholder = placeholder;
  }

  fieldForm.appendChild(label);
  fieldForm.appendChild(inputContainer);

  return fieldForm;
};
