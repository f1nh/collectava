const menuButton = document.querySelector('.site-header_menu');
const navigation = document.querySelector('#primary-navigation');
const mobileNavigation = window.matchMedia('(max-width: 639px)');

const setNavigation = (open) => {
  menuButton.hidden = !mobileNavigation.matches;
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.hidden = mobileNavigation.matches && !open;
};

menuButton.addEventListener('click', () =>
  setNavigation(menuButton.getAttribute('aria-expanded') !== 'true'),
);
navigation.addEventListener('click', () => setNavigation(false));
document.addEventListener('keydown', (event) => {
  if (
    event.key === 'Escape' &&
    menuButton.getAttribute('aria-expanded') === 'true'
  ) {
    setNavigation(false);
    menuButton.focus();
  }
});
mobileNavigation.addEventListener('change', () => setNavigation(false));
setNavigation(false);
