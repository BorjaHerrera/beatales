import { API } from '../API/API';

export const checkLoading = async () => {
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
    console.error('Token inválido o usuario no autorizado:', error);

    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('userId');
  }
};
