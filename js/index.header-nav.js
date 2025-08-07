function updateHeaderNavState() {
  const menuCheckbox = document.querySelector('#menu');
  const headerNav = document.querySelector('.header-nav');
  const body = document.body;

  if (!menuCheckbox || !headerNav) return;

  if (window.innerWidth < 992 && menuCheckbox.checked) {
    headerNav.style.height = '100vh'; 
    body.style.overflow = 'hidden';   
  } else {
    headerNav.style.height = '0';    
    body.style.overflow = '';         
  }
}


document.querySelector('#menu')?.addEventListener('change', updateHeaderNavState);
window.addEventListener('resize', updateHeaderNavState);
window.addEventListener('DOMContentLoaded', updateHeaderNavState);

document.querySelectorAll('.header-nav__links-item').forEach(link => {
  link.addEventListener('click', () => {
    const menuCheckbox = document.querySelector('#menu');
    const body = document.body;
    if (menuCheckbox) {
      menuCheckbox.checked = false;
      body.style.overflow = '';
      updateHeaderNavState();
    }
  });
});