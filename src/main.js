import './style.css';

window.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    document.querySelector('[data-menu]')?.classList.remove('no-transition');
  });
});

const burgerBtn = document.querySelector('[data-menu-toggle]');
const closeBtn = document.querySelector('[data-menu-close]');
const menu = document.querySelector('[data-menu]');
const backdrop = document.querySelector('[data-menu-backdrop]');

burgerBtn?.addEventListener('click', () => {
  menu?.classList.add('header__menu--mob-tabl--active');
  backdrop?.classList.add('backdrop--active');
});

closeBtn?.addEventListener('click', () => {
  menu?.classList.remove('header__menu--mob-tabl--active');
  backdrop?.classList.remove('backdrop--active');
});

backdrop?.addEventListener('click', () => {
  menu?.classList.remove('header__menu--mob-tabl--active');
  backdrop?.classList.remove('backdrop--active');
});

const desktopNav = document.querySelector('.header__nav--desktop');

if (desktopNav) {
  const navItems = desktopNav.querySelectorAll('.nav__item');

  navItems.forEach((item) => {
    const linkOrButton = item.querySelector('.nav__link');
    const iconImg = item.querySelector('.chevron-down__icon img');

    if (linkOrButton) {
      linkOrButton.addEventListener('click', () => {
        desktopNav
          .querySelectorAll('.nav__item--active')
          .forEach((activeItem) => {
            activeItem.classList.remove('nav__item--active');
            const icon = activeItem.querySelector('.chevron-down__icon img');
            if (icon) {
              icon.src = './src/assets/icons/chevron-down.svg';
            }
          });

        item.classList.add('nav__item--active');

        if (iconImg) {
          iconImg.src = './src/assets/icons/chevron-down-active.svg';
        }
      });
    }
  });
}

const nav = document.querySelector('.header__nav--mob-tabl');

if (nav) {
  const navLinks = nav.querySelectorAll('.nav__link');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      nav
        .querySelector('.nav__item--active')
        ?.classList.remove('nav__item--active');
      link.parentElement.classList.add('nav__item--active');
    });
  });
}
