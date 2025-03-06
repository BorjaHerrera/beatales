import { header } from '../../components/header/header';

export const renderHeader = () => {
  const existingHeader = document.querySelector('#header');
  if (existingHeader) {
    existingHeader.remove();
  }
  header();
};
