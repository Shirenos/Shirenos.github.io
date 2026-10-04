(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Typing effect
  var el = document.getElementById('typed');
  var text = 'Привет, я Shiren';
  if (el) {
    if (reduce) {
      el.textContent = text;
    } else {
      var i = 0;
      (function type() {
        el.textContent = text.slice(0, ++i);
        if (i < text.length) setTimeout(type, 85 + Math.random() * 60);
      })();
    }
  }

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  items.forEach(function (n, idx) {
    n.style.setProperty('--d', ((idx % 4) * 0.08) + 's');
  });
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (n) { n.classList.add('visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (n) { io.observe(n); });
  }
})();
