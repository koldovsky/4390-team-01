document.addEventListener('DOMContentLoaded', function () {
  const menuCheckbox = document.getElementById('menu');
  const headerNav = document.querySelector('.header-nav');
  const navLinks = document.querySelectorAll('.header-nav__links-item');

  function isMobile() {
    return window.innerWidth < 992;
  }

  function setHeaderNavHeight() {
    if (menuCheckbox && headerNav) {
      if (menuCheckbox.checked && isMobile()) {
        headerNav.style.height = '100vh';
        document.body.style.overflow = 'hidden';
      } else {
        headerNav.style.height = '';
        document.body.style.overflow = '';
      }
    }
  }

  if (menuCheckbox) {
    menuCheckbox.addEventListener('change', setHeaderNavHeight);
  }

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (menuCheckbox && menuCheckbox.checked && isMobile()) {
        menuCheckbox.checked = false;
        setHeaderNavHeight();
      }
    });
  });

  window.addEventListener('resize', function() {
    setHeaderNavHeight();
  });

  setHeaderNavHeight();
});
