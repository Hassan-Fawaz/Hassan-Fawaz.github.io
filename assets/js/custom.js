/* Hassan Fawaz - site interactions: theme toggle, language toggle,
   publication topic filter, and static search. */
(function () {
  'use strict';

  /* ---- Dark mode toggle ---- */
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem('hf-theme'); } catch (e) { /* private mode */ }
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored === 'dark' || (!stored && prefersDark)) root.classList.add('dark');

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'hf-theme-toggle';
  btn.setAttribute('aria-label', 'Toggle dark mode');
  btn.innerHTML = root.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  btn.addEventListener('click', function () {
    var dark = root.classList.toggle('dark');
    try { localStorage.setItem('hf-theme', dark ? 'dark' : 'light'); } catch (e) { /* ignore */ }
    btn.innerHTML = dark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });
  document.body.appendChild(btn);

  /* ---- Language toggle (homepage) ---- */
  var langBtn = document.getElementById('hf-lang-toggle');
  if (langBtn) {
    var savedLang = null;
    try { savedLang = localStorage.getItem('hf-lang'); } catch (e) { /* ignore */ }
    if (savedLang === 'fr') document.body.classList.add('lang-fr');
    langBtn.addEventListener('click', function () {
      var fr = document.body.classList.toggle('lang-fr');
      try { localStorage.setItem('hf-lang', fr ? 'fr' : 'en'); } catch (e) { /* ignore */ }
    });
  }

  /* ---- Publications topic filter ---- */
  var filter = document.getElementById('hf-topic-filter');
  if (filter) {
    var chips = filter.querySelectorAll('.hf-chip');
    Array.prototype.forEach.call(chips, function (chip) {
      chip.addEventListener('click', function () {
        Array.prototype.forEach.call(chips, function (c) { c.classList.remove('is-active'); });
        chip.classList.add('is-active');
        var topic = chip.getAttribute('data-topic');
        var items = document.querySelectorAll('.archive__item[data-topics]');
        Array.prototype.forEach.call(items, function (item) {
          var topics = (item.getAttribute('data-topics') || '').split(',').map(function (t) { return t.trim(); });
          var show = topic === 'all' || topics.indexOf(topic) !== -1;
          item.parentNode.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ---- Scroll progress bar ---- */
  var progress = document.createElement('div');
  progress.className = 'hf-progress';
  document.body.appendChild(progress);

  var ticking = false;
  function updateProgress() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    progress.style.width = pct + '%';
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
  updateProgress();
})();
