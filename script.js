// =====================================================
//  AKASH G — PORTFOLIO SCRIPT (Production & Safe)
//  Animations, Interactions, Canvas, Typing, Modals
// =====================================================

console.log("%c Akash G Portfolio Loaded Successfully ", "background: #7C3AED; color: #fff; font-size: 13px; font-weight: bold; border-radius: 4px; padding: 4px 8px;");

/* ─── MODALS (Global Scope) ─── */
window.openModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

window.closeModalOuter = function(e, id) {
  if (e && e.target && e.target.id === id) {
    window.closeModal(id);
  }
};

// ESC key closes any open modal
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-ov.open').forEach(m => {
      m.classList.remove('open');
    });
    document.body.style.overflow = '';
  }
});

/* ─── MAIN INITIALIZATION ─── */
document.addEventListener('DOMContentLoaded', () => {

  /* ─── LOADER ─── */
  const loader = document.getElementById('loader');
  const dismissLoader = () => {
    if (loader) loader.classList.add('hidden');
    initReveal();
    animateSkillBars();
  };

  if (document.readyState === 'complete') {
    setTimeout(dismissLoader, 1000);
  } else {
    window.addEventListener('load', () => setTimeout(dismissLoader, 1500));
    // Fallback timer if load takes too long
    setTimeout(dismissLoader, 3000);
  }

  /* ─── CUSTOM CURSOR ─── */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  let mx = -100, my = -100, fx = -100, fy = -100;

  if (cursor && follower) {
    document.addEventListener('mousemove', e => {
      mx = e.clientX; 
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });

    (function followCursor() {
      fx += (mx - fx) * 0.14;
      fy += (my - fy) * 0.14;
      follower.style.left = fx + 'px';
      follower.style.top = fy + 'px';
      requestAnimationFrame(followCursor);
    })();

    document.querySelectorAll('a, button, .proj-card, .sk-card, .cert-card, .proc-step').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%,-50%) scale(2.2)';
        follower.style.transform = 'translate(-50%,-50%) scale(1.6)';
        follower.style.borderColor = 'rgba(236,72,153,0.7)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%,-50%) scale(1)';
        follower.style.transform = 'translate(-50%,-50%) scale(1)';
        follower.style.borderColor = 'rgba(124,58,237,0.5)';
      });
    });
  }

  /* ─── NAVBAR & SCROLL SPY ─── */
  const navbar = document.getElementById('navbar');
  const btt = document.getElementById('btt');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    }
    if (btt) {
      btt.classList.toggle('show', window.scrollY > 500);
    }

    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  }, { passive: true });

  if (btt) {
    btt.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─── HAMBURGER MENU ─── */
  const hamburger = document.getElementById('hamburger');
  const navLinksEl = document.getElementById('navLinks');

  if (hamburger && navLinksEl) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinksEl.classList.toggle('open');
      document.body.style.overflow = navLinksEl.classList.contains('open') ? 'hidden' : '';
    });

    navLinksEl.querySelectorAll('.nav-link').forEach(l => {
      l.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinksEl.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── DARK / LIGHT THEME TOGGLE ─── */
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    const moonIcon = themeBtn.querySelector('.icon-moon');
    const sunIcon = themeBtn.querySelector('.icon-sun');
    let isDark = true;

    themeBtn.addEventListener('click', () => {
      isDark = !isDark;
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      if (moonIcon) moonIcon.style.display = isDark ? '' : 'none';
      if (sunIcon) sunIcon.style.display = isDark ? 'none' : '';
    });
  }

  /* ─── SCROLL REVEAL ─── */
  function initReveal() {
    const revealEls = document.querySelectorAll('.reveal-up');
    if (!revealEls.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = parseFloat(entry.target.style.animationDelay || '0') * 1000;
            setTimeout(() => entry.target.classList.add('visible'), delay);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      revealEls.forEach(el => observer.observe(el));
    } else {
      revealEls.forEach(el => el.classList.add('visible'));
    }
  }

  /* ─── HERO CANVAS PARTICLE SYSTEM ─── */
  (function initCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W, H, particles = [];

    function resize() {
      W = canvas.width = canvas.offsetWidth || window.innerWidth;
      H = canvas.height = canvas.offsetHeight || window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.r = Math.random() * 1.8 + 0.6;
        this.alpha = Math.random() * 0.45 + 0.15;
        this.color = Math.random() > 0.5 ? '124,58,237' : '236,72,153';
      }
      update() {
        this.x += this.vx; 
        this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 70; i++) particles.push(new Particle());

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,58,237,${0.14 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    let animId;
    function animate() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      animId = requestAnimationFrame(animate);
    }
    animate();
  })();

  /* ─── TYPING ANIMATION ─── */
  (function initTyping() {
    const el = document.getElementById('typedText');
    if (!el) return;
    const roles = ['UI Designer', 'UX Designer', 'Product Designer', 'Creative Thinker', 'Problem Solver'];
    let ri = 0, ci = 0, deleting = false;
    const speed = { type: 90, delete: 50, pause: 2000, pauseBlank: 450 };

    function type() {
      const current = roles[ri];
      if (!deleting) {
        el.textContent = current.slice(0, ++ci);
        if (ci === current.length) {
          deleting = true;
          return setTimeout(type, speed.pause);
        }
      } else {
        el.textContent = current.slice(0, --ci);
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % roles.length;
          return setTimeout(type, speed.pauseBlank);
        }
      }
      setTimeout(type, deleting ? speed.delete : speed.type);
    }
    setTimeout(type, 800);
  })();

  /* ─── SKILL TABS ─── */
  document.querySelectorAll('.stab').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.skill-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const targetPanel = document.getElementById('panel-' + tab);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
      setTimeout(animateSkillBars, 100);
    });
  });

  /* ─── ANIMATE SKILL BARS ─── */
  function animateSkillBars() {
    const fills = document.querySelectorAll('.sk-fill');
    if (!fills.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const w = el.dataset.w || '80';
            el.style.width = w + '%';
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.1 });

      fills.forEach(f => { f.style.width = '0%'; observer.observe(f); });
    } else {
      fills.forEach(f => { f.style.width = (f.dataset.w || '80') + '%'; });
    }
  }

  /* ─── CONTACT FORM VALIDATION ─── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;

      const fields = [
        { id: 'inp-name', err: 'err-name', check: v => v.trim().length > 1 },
        { id: 'inp-email', err: 'err-email', check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
        { id: 'inp-subject', err: 'err-subject', check: v => v.trim().length > 2 },
        { id: 'inp-msg', err: 'err-msg', check: v => v.trim().length > 5 },
      ];

      fields.forEach(f => {
        const input = document.getElementById(f.id);
        const err = document.getElementById(f.err);
        if (input && !f.check(input.value)) {
          input.classList.add('error');
          if (err) err.classList.add('show');
          valid = false;
        } else if (input) {
          input.classList.remove('error');
          if (err) err.classList.remove('show');
        }
      });

      if (!valid) return;

      const btn = document.getElementById('submitBtn');
      const txt = document.getElementById('btnTxt');
      if (btn) btn.disabled = true;
      if (txt) txt.textContent = 'Sending…';

      setTimeout(() => {
        form.querySelectorAll('.fg').forEach(f => f.style.display = 'none');
        if (btn) btn.style.display = 'none';
        const ok = document.getElementById('formOK');
        if (ok) ok.style.display = 'block';
      }, 1200);
    });

    form.querySelectorAll('input, textarea').forEach(el => {
      el.addEventListener('input', () => {
        el.classList.remove('error');
        const err = document.getElementById('err-' + el.id.replace('inp-', ''));
        if (err) err.classList.remove('show');
      });
    });
  }

  /* ─── PROCESS STEP ANIMATION ─── */
  (function () {
    const steps = document.querySelectorAll('.proc-step');
    if (!steps.length) return;

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 120);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      steps.forEach(s => {
        s.style.opacity = '0';
        s.style.transform = 'translateY(24px)';
        s.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
        obs.observe(s);
      });
    }

    setTimeout(() => {
      steps.forEach(s => {
        if (s.getBoundingClientRect().top < window.innerHeight * 0.95) {
          s.style.opacity = '1';
          s.style.transform = 'translateY(0)';
        }
      });
    }, 2200);
  })();

  /* ─── RIPPLE EFFECT ON BUTTONS ─── */
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute;left:${e.clientX - rect.left}px;top:${e.clientY - rect.top}px;
        width:0;height:0;transform:translate(-50%,-50%);
        border-radius:50%;background:rgba(255,255,255,0.3);
        animation:rippleAnim 0.6s ease-out forwards;pointer-events:none;
      `;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });

  /* ─── PARALLAX HERO GLOWS ─── */
  document.addEventListener('mousemove', e => {
    const glows = document.querySelectorAll('.hero-glow');
    if (!glows.length) return;
    const xPct = (e.clientX / window.innerWidth - 0.5) * 20;
    const yPct = (e.clientY / window.innerHeight - 0.5) * 20;
    glows.forEach((g, i) => {
      const factor = i === 0 ? 1 : i === 1 ? -1 : 0.5;
      g.style.transform = `translate(${xPct * factor}px, ${yPct * factor}px)`;
    });
  }, { passive: true });

  /* ─── RE-TRIGGER REVEAL AFTER LOADER ─── */
  setTimeout(() => {
    document.querySelectorAll('.reveal-up').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
        el.classList.add('visible');
      }
    });
    animateSkillBars();
  }, 2400);

});
