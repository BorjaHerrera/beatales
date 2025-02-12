import './loader.css';

export const createLoader = () => {
  const loader = document.createElement('div');
  loader.className = 'loader-hidden';
  return loader;
};
