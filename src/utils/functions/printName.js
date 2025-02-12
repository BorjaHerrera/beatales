export const printName = () => {
  const userName = localStorage.getItem('name');
  const printNameDiv = document.createElement('div');
  printNameDiv.className = 'comment-name';
  printNameDiv.textContent = userName || 'Usuario';
  return printNameDiv;
};
