export const loginRedirect = () => {
  const token = localStorage.getItem('token');
  console.log('Token:', token); // Verifica si el token está en localStorage

  if (!token) {
    console.log('Redirigiendo a login...');
    navigate({ path: '/login', page: Login }); // Redirección
    return true; // Regresa true para indicar que ocurrió la redirección
  }

  return false;
};
