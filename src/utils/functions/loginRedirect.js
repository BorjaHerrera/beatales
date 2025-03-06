export const loginRedirect = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    console.log('Redirigiendo a login...');
    navigate({ path: '/login', page: Login });
    return true; // Regresa true para indicar que ocurrió la redirección
  }

  return false;
};
