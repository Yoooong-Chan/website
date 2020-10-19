const hamburgerContainer = document.querySelector('#header_main_nav');
const hamburger = document.querySelector('.header_main_nav_hamburger');
const links = document.querySelectorAll('.header_main_links li');
/* when using forEach , Array state => querySelecotrAll로 모든 li를 가져와야함 */

hamburger.addEventListener('click', () => {
  hamburgerContainer.classList.toggle('clicked');
  console.log(links);
  links.forEach((link) => {
    link.classList.toggle('fade');
    console.log(link);
  });
});
