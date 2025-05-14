const url = 'https://beatales-backend.vercel.app/api/v1';

// prettier-ignore
export const API = async ({ endpoint, method = 'GET', body, isJSON = true, token = null }) => {
  const headers = {};

  if (token) {  
    headers['Authorization'] = `Bearer ${token}`;
  }

  if (isJSON && body && !(body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

const bodyData = isJSON && !(body instanceof FormData) ? (body ? JSON.stringify(body) : null) : body;

  try {
    const res = await fetch(url + endpoint, {
      method,
      headers,
      body: bodyData
    });

    const response = await res.json();

    if (!res.ok) {
      const error = new Error('Error en la solicitud');
      error.details = response;
      throw error;
    }

    return response;
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error;
  }
};
