articleAll = document.querySelectorAll('article');


articleAll.forEach((article, index) => {

    const burger = article.querySelector('.burger');
    const navs = article.querySelectorAll('.dev');

    if (!burger || navs.length === 0) return;

    if (index === 0) {
      navs.forEach(nav => nav.classList.add('active'));
      burger.setAttribute('aria-expanded', true);
      burger.textContent = "-";
    }

    burger.addEventListener('click', () => {

      const isOpen = burger.getAttribute('aria-expanded') === 'true';
      if (!isOpen) {
        burger.textContent = "-";
      } else {
        burger.textContent = "+";
      }

      navs.forEach(nav => {
        nav.classList.toggle('active', !isOpen);
      });

      burger.setAttribute('aria-expanded', !isOpen);

    });
});