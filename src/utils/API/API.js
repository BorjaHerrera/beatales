const url = 'http://localhost:3000/api/v1';

// prettier-ignore
export const API = async ({ endpoint, method = 'GET', body, isJSON = true, token = null }) => {
  const headers = {};

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  if (isJSON) {
    headers['Content-Type'] = 'application/json';
  }

console.log('Body:', body);
console.log('Headers:', headers);

const bodyData = isJSON ? (body ? JSON.stringify(body) : null) : body;


try {
  const res = await fetch(url + endpoint, { body: bodyData, method, headers});

  const response = await res.json();

  if (!res.ok) {
    const error = new Error('Error en la solicitud Login');
    error.details = response;
    throw error;
  }

  return response;
} catch (error) {
  console.error('Error en la solicitud:', error);
  throw error; 
}
 
};
