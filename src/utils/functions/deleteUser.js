import { API } from '../API/API';

export const deleteUser = async () => {
  await API({
    endpoint: 'usuarios/:id',
    method: 'delete',
    token: localStorage.getItem('token')
  });
  localStorage.removeItem('token');
  window.location.href = '/';
};
