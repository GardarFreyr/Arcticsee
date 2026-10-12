// Navigation: solid background on scroll, and the mobile menu
(function () {
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('mobile-menu');
  var open = false;

  function update() {
    nav.classList.toggle('nav--solid', open || window.scrollY > 40);
    nav.classList.toggle('nav--open', open);
  }

  function setOpen(next) {
    open = next;
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    update();
  }

  toggle.addEventListener('click', function () { setOpen(!open); });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && open) { setOpen(false); toggle.focus(); }
  });
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
