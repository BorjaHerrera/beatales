import './descriptionHero.css';

export const descriptionHero = () => {
  const descriptionContainer = document.createElement('div');
  descriptionContainer.className = 'description';

  const title = document.createElement('h1');
  title.textContent = 'The BeaTales Experience';
  title.className = 'h1-description';

  const text = document.createElement('p');
  text.textContent =
    'Sumérgete en la magia de la banda más icónica de todos los tiempos, donde sus canciones no solo definieron una era, sino que también abrieron puertas a historias fascinantes. Descubre los secretos, anécdotas y curiosidades que inspiraron sus composiciones.';

  text.className = 'p-description';

  const img = document.createElement('img');
  img.className = 'beatles-img';
  img.src = '/assets/beatles.png';

  descriptionContainer.append(title, img, text);

  return descriptionContainer;
};
