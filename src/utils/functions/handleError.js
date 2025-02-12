import { errorMessage } from './errorMessage';

export const handleError = (form, error) => {
  // Asegúrate de que 'error' tiene la propiedad 'details' y que 'errorType' está presente
  const errorData = error.details || {}; // Si no tiene 'details', asigna un objeto vacío

  const errorType = errorData.errorType || 'UNKNOWN_ERROR'; // Si no tiene 'errorType', asigna un valor predeterminado

  switch (errorType) {
    case 'DUPLICATED_EMAIL':
      errorMessage(
        form,
        'El correo ingresado ya está asociado a un usuario. Si ya tienes una cuenta, inicia sesión.'
      );
      break;
    case 'INVALID_PASSWORD_OR_USER':
      errorMessage(
        form,
        'Contraseña o usuario incorrecto. Por favor, inténtalo de nuevo.'
      );
      break;
    case 'OTHER_ERROR':
      errorMessage(form, 'Ocurrió un error inesperado. Inténtalo más tarde.');
      break;
    case 'UNKNOWN_ERROR':
      errorMessage(form, 'Error desconocido. Inténtalo más tarde.');
      break;
    default:
      errorMessage(form, 'Error desconocido. Inténtalo más tarde.');
      break;
  }
};
