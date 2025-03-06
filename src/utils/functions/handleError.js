import { errorMessage } from './errorMessage';

export const handleError = (form, error) => {
  if (typeof error === 'string') {
    errorMessage(form, error);
    return;
  }

  const errorData = error.details || {};

  const errorType = errorData.errorType || 'UNKNOWN_ERROR';

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
    case 'YOUTUBE_ERROR':
      errorMessage(
        form,
        'El enlace debe ser de YouTube Music y debe comenzar con "https://music.youtube.com'
      );
      break;
    case 'EXISTING_SONG_ERROR':
      errorMessage(
        form,
        'Esta canción ya está publicada y no puede subir de nuevo.'
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
