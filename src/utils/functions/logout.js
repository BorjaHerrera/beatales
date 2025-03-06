import { renderHeader } from './renderHeader';

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  window.location.href = '/';
  alert('Sesión cerrada correctamente.');
  renderHeader();
};
