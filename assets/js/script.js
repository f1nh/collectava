const menuButton = document.querySelector('.site-header_menu');
const navigation = document.querySelector('#primary-navigation');
const mobileNavigation = window.matchMedia('(max-width: 639px)');

const setNavigation = (open) => {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.hidden = mobileNavigation.matches && !open;
};

const updateNavigation = () => {
  menuButton.hidden = !mobileNavigation.matches;
  setNavigation(false);
};

menuButton.addEventListener('click', () => {
  setNavigation(menuButton.getAttribute('aria-expanded') !== 'true');
});
navigation.addEventListener('click', (event) => {
  if (mobileNavigation.matches && event.target.closest('a')) setNavigation(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setNavigation(false);
    menuButton.focus();
  }
});
mobileNavigation.addEventListener('change', updateNavigation);
updateNavigation();