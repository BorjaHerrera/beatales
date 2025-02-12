export const errorMessage = (form, message) => {
  const existingError = form.querySelector('.error-message');

  if (existingError) {
    existingError.remove();
  }

  const onScreenError = document.createElement('p');
  onScreenError.textContent = message;
  onScreenError.classList.add('error-message');
  form.appendChild(onScreenError);
};
