export const printFirstLetter = () => {
  const userName = localStorage.getItem('name') || 'U';
  const firstLetterDiv = document.createElement('div');
  const firstLetter = userName.charAt(0).toUpperCase();
  firstLetterDiv.className = 'circle-initial';
  firstLetterDiv.textContent = firstLetter;

  return firstLetterDiv;
};
