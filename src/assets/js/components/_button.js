const menuButton = () => {
  const button = document.querySelector('.js-menuButton');
  const menu = document.querySelector('.js-menu');
  button.addEventListener('click', () => {
    button.classList.toggle('u-state__open');
    menu.classList.toggle('u-state__open');
  });
  window.addEventListener('resize', () => {
    button.classList.remove('u-state__open');
    menu.classList.remove('u-state__open');
  });
};

export default menuButton;
