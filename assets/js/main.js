// SoS2LearnDBS — shared interactivity
(function () {
  'use strict';

  // Mobile menu
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-menu-toggle]');
    if (btn) {
      const nav = document.querySelector('.nav');
      if (nav) nav.classList.toggle('is-open');
    }
    const sbt = e.target.closest('[data-sidebar-toggle]');
    if (sbt) {
      const sb = document.querySelector('.sidebar');
      if (sb) sb.classList.toggle('is-open');
    }
  });

  // Tabs (generic)
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    const tabs = group.querySelectorAll('.tab');
    const panels = group.parentElement.querySelectorAll('[data-panel]');
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        tabs.forEach(function (x) { x.classList.remove('active'); });
        t.classList.add('active');
        const key = t.dataset.tab;
        panels.forEach(function (p) {
          p.hidden = (p.dataset.panel !== key);
        });
      });
    });
  });

  // Open a specific tab when the URL has a hash (e.g. #news, #tutorials)
  const tabKeyFromHash = (location.hash || '').replace('#', '').toLowerCase();
  if (tabKeyFromHash) {
    document.querySelectorAll('[data-tabs]').forEach(function (group) {
      const tab = group.querySelector('.tab[data-tab="' + tabKeyFromHash + '"]');
      if (tab) tab.click();
    });
  }

  // Chips (filter)
  document.querySelectorAll('[data-chipgroup]').forEach(function (grp) {
    grp.querySelectorAll('.chip').forEach(function (c) {
      c.addEventListener('click', function () {
        if (grp.dataset.chipgroup === 'multi') {
          c.classList.toggle('is-active');
        } else {
          grp.querySelectorAll('.chip').forEach(function (x) { x.classList.remove('is-active'); });
          c.classList.add('is-active');
        }
      });
    });
  });

  // Quiz (very small state machine)
  const quiz = document.querySelector('[data-quiz]');
  if (quiz) {
    const data = [
      {
        q: "What is a Nature-based Solution (NbS) in river restoration?",
        opts: [
          "A concrete wall to stop floods.",
          "An action that works with natural processes to support biodiversity and water quality.",
          "A commercial water bottling project.",
          "A chemical treatment added upstream."
        ], correct: 1
      },
      {
        q: "Why is the Danube basin relevant to the Black Sea?",
        opts: [
          "It has no connection.",
          "The Danube drains into the Black Sea and carries nutrients and pollutants.",
          "The Black Sea feeds the Danube.",
          "They share the same bedrock formation only."
        ], correct: 1
      },
      {
        q: "Which action best supports community water literacy?",
        opts: [
          "Hiding data from the public.",
          "Sharing open learning modules and transparent indicators.",
          "Limiting education to specialists only.",
          "Removing local schools from outreach."
        ], correct: 1
      }
    ];
    let idx = 0, score = 0, locked = false;

    const stem = quiz.querySelector('[data-quiz-stem]');
    const opts = quiz.querySelector('[data-quiz-options]');
    const dots = quiz.querySelector('[data-quiz-dots]');
    const next = quiz.querySelector('[data-quiz-next]');
    const feedback = quiz.querySelector('[data-quiz-feedback]');
    const result = quiz.querySelector('[data-quiz-result]');
    const stage = quiz.querySelector('[data-quiz-stage]');

    function renderDots() {
      dots.innerHTML = '';
      for (let i = 0; i < data.length; i++) {
        const d = document.createElement('span');
        d.className = 'quiz-dot' + (i < idx ? ' done' : (i === idx ? ' active' : ''));
        dots.appendChild(d);
      }
    }

    function render() {
      locked = false;
      feedback.textContent = '';
      feedback.className = '';
      next.textContent = idx === data.length - 1 ? 'Submit' : 'Next';
      next.disabled = true;
      const item = data[idx];
      stem.textContent = item.q;
      opts.innerHTML = '';
      item.opts.forEach(function (o, i) {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'quiz-option';
        b.textContent = o;
        b.addEventListener('click', function () {
          if (locked) return;
          opts.querySelectorAll('.quiz-option').forEach(function (x) { x.classList.remove('selected'); });
          b.classList.add('selected');
          b.dataset.choice = i;
          next.disabled = false;
        });
        opts.appendChild(b);
      });
      renderDots();
    }

    next.addEventListener('click', function () {
      const sel = opts.querySelector('.quiz-option.selected');
      if (!sel) return;
      if (locked) {
        idx++;
        if (idx >= data.length) {
          stage.hidden = true;
          result.hidden = false;
          result.querySelector('[data-quiz-score]').textContent = score + ' / ' + data.length;
        } else {
          render();
        }
        return;
      }
      const choice = Number(sel.dataset.choice);
      const correctIndex = data[idx].correct;
      locked = true;
      opts.querySelectorAll('.quiz-option').forEach(function (b, i) {
        if (i === correctIndex) b.classList.add('correct');
        else if (i === choice) b.classList.add('wrong');
      });
      if (choice === correctIndex) {
        score++;
        feedback.textContent = "Correct!";
        feedback.className = 'callout';
      } else {
        feedback.textContent = "Not quite — review the lesson above.";
        feedback.className = 'callout callout--warn';
      }
      next.textContent = idx === data.length - 1 ? 'See result' : 'Next question';
      next.disabled = false;
    });

    render();
  }

  // Animate number counters
  document.querySelectorAll('[data-count]').forEach(function (el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    let cur = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const tick = function () {
      cur += step;
      if (cur >= target) { el.textContent = target.toLocaleString(); return; }
      el.textContent = cur.toLocaleString();
      requestAnimationFrame(tick);
    };
    tick();
  });

  // Set active nav based on path and hash
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const hash = (location.hash || '').toLowerCase();
  const navLinks = Array.from(document.querySelectorAll('.nav a'));

  let hasExactHashMatch = false;
  navLinks.forEach(function (a) {
    const href = (a.getAttribute('href') || '').toLowerCase();
    const parts = href.split('#');
    const hrefPath = parts[0] || 'index.html';
    const hrefHash = parts[1] ? '#' + parts[1] : '';
    if (hrefPath === path && hrefHash && hrefHash === hash) {
      hasExactHashMatch = true;
    }
  });

  navLinks.forEach(function (a) {
    const href = (a.getAttribute('href') || '').toLowerCase();
    const parts = href.split('#');
    const hrefPath = parts[0] || 'index.html';
    const hrefHash = parts[1] ? '#' + parts[1] : '';
    const isActive = hasExactHashMatch
      ? (hrefPath === path && hrefHash === hash)
      : (hrefPath === path && !hrefHash);

    if (isActive) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
})();
