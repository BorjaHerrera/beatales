import './spinner.css';

export const createSpinner = () => {
  const spinner = document.createElement('div');
  spinner.className = 'spinner';

  return spinner;
};
