/* Invitación Santiago — lógica */
(function () {
  'use strict';

  /* ---------- Cuenta regresiva ---------- */
  var TARGET = new Date(2026, 6, 25, 9, 0, 0).getTime(); // 25 jul 2026, 9:00
  var elD = document.querySelector('[data-d]');
  var elH = document.querySelector('[data-h]');
  var elM = document.querySelector('[data-m]');
  var elS = document.querySelector('[data-s]');

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    var diff = Math.max(0, Math.floor((TARGET - Date.now()) / 1000));
    var days = Math.floor(diff / 86400); diff -= days * 86400;
    var hours = Math.floor(diff / 3600); diff -= hours * 3600;
    var mins = Math.floor(diff / 60);
    var secs = diff - mins * 60;
    if (elD) elD.textContent = pad(days);
    if (elH) elH.textContent = pad(hours);
    if (elM) elM.textContent = pad(mins);
    if (elS) elS.textContent = pad(secs);

    // guardar posición de la música cada segundo
    if (audio && !audio.paused) {
      try { localStorage.setItem('sant_music_pos', audio.currentTime); } catch (e) {}
    }
  }

  /* ---------- Música de fondo ---------- */
  var audio = document.getElementById('bgm');
  var soundBtn = document.getElementById('soundBtn');
  var eq = soundBtn ? soundBtn.querySelector('.eq') : null;
  var icoMute = soundBtn ? soundBtn.querySelector('.ico-mute') : null;

  function setSoundUI(playing) {
    if (!eq || !icoMute) return;
    eq.hidden = !playing;
    icoMute.style.display = playing ? 'none' : '';
  }

  if (audio) {
    audio.volume = 0.35;
    try {
      var pos = parseFloat(localStorage.getItem('sant_music_pos'));
      if (!isNaN(pos)) audio.currentTime = pos;
    } catch (e) {}

    // Intentar reproducir; si el navegador lo bloquea, iniciar al primer toque
    audio.play().then(function () {
      setSoundUI(true);
    }).catch(function () {
      setSoundUI(false);
      var start = function () {
        audio.play().then(function () { setSoundUI(true); }).catch(function () {});
        window.removeEventListener('pointerdown', start);
      };
      window.addEventListener('pointerdown', start, { once: true });
    });

    if (soundBtn) {
      soundBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (audio.paused) {
          audio.play().then(function () { setSoundUI(true); }).catch(function () {});
        } else {
          audio.pause();
          setSoundUI(false);
        }
      });
    }
  }

  /* ---------- Modal estacionamiento ---------- */
  var modal = document.getElementById('parkModal');
  var parkBtn = document.getElementById('parkBtn');
  var parkClose = document.getElementById('parkClose');

  function openModal() { if (modal) modal.hidden = false; }
  function closeModal() { if (modal) modal.hidden = true; }

  if (parkBtn) parkBtn.addEventListener('click', openModal);
  if (parkClose) parkClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal(); // clic en el fondo
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  /* ---------- Iniciar ---------- */
  tick();
  setInterval(tick, 1000);
})();
