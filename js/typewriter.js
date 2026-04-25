/* ─── Typewriter effect ─── */
(function () {
  const el    = document.getElementById('typewriter');
  const words = [
    'Databases & Distributed Systems',
    'Oracle RDBMS · LogMiner',
    'High Availability Systems',
    'Performance Engineering',
    'Cloud Infrastructure',
  ];
  let wi = 0, ci = 0, deleting = false;

  function type() {
    const word    = words[wi];
    const current = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
    el.textContent = current;

    let delay = deleting ? 45 : 80;

    if (!deleting && ci > word.length) {
      delay    = 2200;
      deleting = true;
    } else if (deleting && ci < 0) {
      deleting = false;
      ci       = 0;
      wi       = (wi + 1) % words.length;
      delay    = 400;
    }
    setTimeout(type, delay);
  }

  setTimeout(type, 900);
})();
