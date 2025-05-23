import { API } from '../API/API';

export const validateToken = async () => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  if (!token || !userId) {
    return;
  }

  try {
    const res = await API({
      endpoint: `/usuarios/${userId}`,
      method: 'GET',
      token
    });

    localStorage.setItem('name', res.name);
    localStorage.setItem('userId', res._id);
  } catch (error) {
    const status = error.details?.status;

    if (status === 404) {
      console.log('Usuario no encontrado. Eliminando datos del localStorage');
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('userId');
    } else {
      console.error('Error verificando usuario:', error);
    }
  }
};
