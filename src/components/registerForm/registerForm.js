import { button } from '../button/button';
import { fieldForm } from '../fileForm/fileForm';
import './registerForm.css';
// prettier-ignore
export const registerForm = (form) => {
  form.className = "register-form"

  const nameField = fieldForm( { labelText: "Name", type: "text" })

  const emailField = fieldForm( { labelText: "Correo electrónico", type: 'email'} )
  const passwordField = fieldForm( { labelText: "Contraseña", type: 'password'} )

  form.append(nameField, emailField, passwordField)

  const submitButton = button({ text: 'Regístrate', type: 'submit' });

  form.appendChild(submitButton)
}
