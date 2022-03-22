function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  // MAIN MENU
  const BurgerBtn = document.querySelector('#main-nav-burger');
  const MainNav = document.querySelector('#main-nav');
  const MainNavLinks = document.querySelectorAll('.main-nav__link');

  if (BurgerBtn && MainNav && MainNavLinks) {

    const toggleMainMenu = () => {
      BurgerBtn.classList.toggle('active');
      MainNav.classList.toggle('active');
    }

    BurgerBtn.addEventListener('click', (ev) => toggleMainMenu());

    MainNavLinks.forEach(item => {
      item.addEventListener('click', () => toggleMainMenu())
    });
  }
});
