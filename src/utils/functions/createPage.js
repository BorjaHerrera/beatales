export const createPage = (id) => {
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.id = id;

  main.innerHTML = '';

  main.appendChild(section);
  return section;
};
