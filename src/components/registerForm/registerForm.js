import { button } from '../button/button';
import { fieldForm } from '../fileForm/fileForm';
import './registerForm.css';
// prettier-ignore
export const registerForm = (form) => {
  form.className = "register-form"

  const nameField = fieldForm( { labelText: "Nombre", type: "text" })

  const emailField = fieldForm( { labelText: "Correo electrónico", type: 'email'} )
  const passwordField = fieldForm( { labelText: "Contraseña", type: 'password'} )
  const imageField = fieldForm({ labelText: "Imagen de perfil", type: 'file' })

  form.append(nameField, emailField, passwordField, imageField)

  const submitButton = button({ text: 'Regístrate', type: 'submit' });

  form.appendChild(submitButton)
}
