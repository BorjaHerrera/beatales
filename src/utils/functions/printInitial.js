export const printFirstLetter = (userName) => {
  const firstLetterDiv = document.createElement('div');
  firstLetterDiv.className = 'circle-initial';

  const span = document.createElement('span');
  span.className = 'capital-letter';
  span.textContent = userName.charAt(0).toUpperCase();
  firstLetterDiv.appendChild(span);

  return firstLetterDiv;
};
