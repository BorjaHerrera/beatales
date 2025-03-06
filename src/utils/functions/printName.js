export const printName = (userName) => {
  const printNameDiv = document.createElement('div');
  printNameDiv.className = 'comment-name';
  const strong = document.createElement('strong');
  strong.textContent = userName;

  const normalText = document.createElement('span');
  normalText.textContent = ' ha escrito:';

  printNameDiv.appendChild(strong);
  printNameDiv.appendChild(normalText);

  return printNameDiv;
};
