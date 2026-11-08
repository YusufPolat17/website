/**
 * ==========================================================================
 * YUSUF × ÇİĞDEM — "Our Little Universe"
 * Core Interactive Storytelling, Dynamic Counters & Easter Eggs Engine
 * ==========================================================================
 */

// Global Configuration (Easy to customize by Yusuf)
const relationshipConfig = {
  names: {
    person1: "Yusuf",
    person2: "Çiğdem"
  },
  // Exact timestamps with explicit Istanbul (UTC+03:00) timezone
  firstMessage: "2026-08-07T18:25:00+03:00",
  relationshipStart: "2026-09-14T18:20:00+03:00",
  photos: [
    {
      src: "assets/images/photo-1.jpg",
      date: "11.09.2026",
      title: "İlk fotoğrafımız"
    },
    {
      src: "assets/images/photo-2.jpg",
      date: "14.09.2026",
      title: "Biz olduk"
    },
    {
      src: "assets/images/photo-3.jpg",
      date: "21.09.2026",
      title: "Bir anı daha"
    }
  ],
  music: "assets/audio/shameless.mp3"
};

/**
 * ==========================================================================
 * YUSUF'UN İSTEDİĞİ ZAMAN DÜZENLEYEBİLECEĞİ "OPEN WHEN..." MEKTUPLARI
 * ==========================================================================
 */
const letterContents = {
  1: {
    title: "Mutlu olduğunda aç 🌸",
    body: "Gülümsemenin o güzel yüzüne ne kadar yakıştığını hiçbir zaman aklından çıkarma.\n\nSenin o saf, içten mutluluğun benim dünyamdaki en huzurlu şey. Bugün neye bu kadar güldüysen, ne seni bu kadar sevindirdiyse gel bana da anlat; mutluluğunu ikiye katlayalım. Hep böyle ışıl ışıl parla güzelim."
  },
  2: {
    title: "Üzgün olduğunda aç 🤍",
    body: "Bazen her şey üst üste gelebilir, yorulmuş veya kırılmış hissedebilirsin. Ama şunu hiç unutma:\n\nNe olursa olsun ben buradayım. Yanındayım, elini sımsıkı tutuyorum ve bu hisler geçecek. Kendine asla haksızlık etme. Derin bir nefes al ve sana sımsıkı sarıldığımı hisset. Sen benim en kıymetlimsin."
  },
  3: {
    title: "Beni özlediğinde aç 💌",
    body: "Ben de seni çok özlüyorum... Emin ol şu anda da aklımdasın.\n\nİlk fotoğrafımıza bak, çimlerde oturup saatlerce güldüğümüz o günü hatırla. Mesafeler sadece birer rakam, kalbimin her atışında sen varsın. Şimdi bu mektubu kapat ve bana hemen bir mesaj at :)"
  },
  4: {
    title: "Bana sinir olduğunda aç 😤",
    body: "Biliyorum, bazen fazla inatçı, bazen şapşal ya da Lightning McQueen gibi aceleci olabiliyorum :D\n\nAma bil ki seni kırmak isteyeceğim en son şey bile olamaz. Sinirin biraz yatışana kadar derin bir nefes al, sonra da bana neden kızdığını tatlı tatlı anlat, hemen gönlünü alayım. Seni her halinle çok seviyorum."
  },
  5: {
    title: "Uyuyamadığında aç 🌙",
    body: "Gözlerini hafifçe kapat ve Yenikapı konser davetinden bugüne kadar geçen tüm o güzel, sıcacık anlarımızı hayal et.\n\nGece ne kadar sessiz olursa olsun zihnindeki o kalabalık düşünceleri bir kenara bırak. Ben seni hep korurum, hep yanındayım. Huzurla uyu sevgilim, rüyanda beni gör 🤍"
  },
  6: {
    title: "Rastgele bir gün aç ✨",
    body: "Bugün özel bir gün olmak zorunda değil. Sırf sıradan bir gün diye sana olan sevgimi hatırlatamam mı?\n\nHayatıma girdiğin 7 Ağustos gününden beri her günüm seninle güzelleşti. İyi ki o ilk mesajı atmışım, iyi ki sen de cevap vermişsin. İyi ki varsın Çiğdem'im."
  }
};

/* ==========================================================================
   DOM READY INITIALIZER
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Console Easter Egg for Çiğdem
  console.log(
    "%cÇiğdem buraya kadar geldiysen siteyi fazla kurcalıyorsun :D\n— Yusuf",
    "font-size: 16px; color: #8D3046; font-weight: bold; background: #FFF9F5; padding: 10px 14px; border: 2px solid #F6C9D8; border-radius: 8px;"
  );

  initIntro();
  initCounters();
  initAudioPlayer();
  initAmbientStars();
  initStickyHeader();
  initCustomCursor();
  initCapybaraEasterEgg();
  initScrollAnimations();
  initBadgesEasterEggs();
  initFooterSecret();
});

/* ==========================================================================
   1. CINEMATIC INTRO SEQUENCE
   ========================================================================== */
function initIntro() {
  const overlay = document.getElementById("intro-overlay");
  const skipBtn = document.getElementById("skip-intro-btn");
  if (!overlay) return;

  const steps = [
    document.getElementById("intro-step-1"), // 07.08.2026
    document.getElementById("intro-step-2"), // 18:25
    document.getElementById("intro-step-3"), // "Çiğdem merhaba."
    document.getElementById("intro-step-4"), // and somehow...
    document.getElementById("intro-step-5"), // here we are.
    document.getElementById("intro-step-6")  // YUSUF × ÇİĞDEM
  ];

  let currentStep = 0;
  let introTimer = null;

  function showNextStep() {
    // Fade out previous step if needed or stack gracefully
    if (currentStep > 0 && currentStep <= 2) {
      // Keep date & time together
    } else if (currentStep > 2 && currentStep < steps.length) {
      // Clear intermediate text for cinematic breathing
      steps.forEach((s, idx) => {
        if (idx !== currentStep && idx > 1) s?.classList.remove("active");
      });
    }

    if (currentStep < steps.length) {
      const stepEl = steps[currentStep];
      if (stepEl) stepEl.classList.add("active");
      currentStep++;

      const delay = currentStep === 1 ? 1200 : currentStep === 2 ? 1400 : currentStep === 3 ? 1800 : currentStep === 4 ? 1400 : currentStep === 5 ? 1400 : 2000;
      introTimer = setTimeout(showNextStep, delay);
    } else {
      // Finished intro
      setTimeout(dismissIntro, 1800);
    }
  }

  function dismissIntro() {
    if (introTimer) clearTimeout(introTimer);
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
  }

  // Prevent scroll during intro
  document.body.style.overflow = "hidden";

  // Skip button
  if (skipBtn) {
    skipBtn.addEventListener("click", dismissIntro);
  }

  // Start sequence
  setTimeout(showNextStep, 400);
}

/* ==========================================================================
   2. DUAL RELATIONSHIP LIVE COUNTERS
   ========================================================================== */
function initCounters() {
  const firstMsgDate = new Date(relationshipConfig.firstMessage).getTime();
  const relStartDate = new Date(relationshipConfig.relationshipStart).getTime();

  function updateCounters() {
    const now = Date.now();

    // Counter A: İlk Mesajımızdan Beri
    const diffFirst = Math.max(0, now - firstMsgDate);
    renderCounter("c1", diffFirst);

    // Counter B: Biz Olalı
    const diffRel = Math.max(0, now - relStartDate);
    renderCounter("c2", diffRel);
  }

  function renderCounter(prefix, diffMs) {
    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const elDays = document.getElementById(`${prefix}-days`);
    const elHours = document.getElementById(`${prefix}-hours`);
    const elMinutes = document.getElementById(`${prefix}-minutes`);
    const elSeconds = document.getElementById(`${prefix}-seconds`);

    if (elDays) elDays.textContent = days;
    if (elHours) elHours.textContent = String(hours).padStart(2, '0');
    if (elMinutes) elMinutes.textContent = String(minutes).padStart(2, '0');
    if (elSeconds) elSeconds.textContent = String(seconds).padStart(2, '0');
  }

  // Initial call and 1-second interval
  updateCounters();
  setInterval(updateCounters, 1000);
}

/* ==========================================================================
   3. AUDIO PLAYER ("Shameless") & AMBIENT MUSIC PULSE
   ========================================================================== */
let isMusicPlaying = false;

function initAudioPlayer() {
  const audio = document.getElementById("love-audio");
  const toggleBtn = document.getElementById("audio-toggle-btn");
  const btnText = document.getElementById("audio-btn-text");

  if (!audio || !toggleBtn) return;

  const onlineFallback = "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/36/54/f7/3654f7f3-b9f9-6d6a-803e-ab79ceaade36/mzaf_7895407354704101960.plus.aac.p.m4a";

  function startPlayback() {
    audio.play()
      .then(() => {
        isMusicPlaying = true;
        toggleBtn.classList.add("audio-playing");
        if (btnText) btnText.textContent = "❚❚ pause";
        showToast("♫ The Weeknd — Shameless çalıyor... ♡");
      })
      .catch((err) => {
        console.warn("Audio playback failed, trying online stream fallback...", err);
        // If not already on online fallback, try online stream
        if (audio.src !== onlineFallback) {
          audio.src = onlineFallback;
          audio.load();
          audio.play()
            .then(() => {
              isMusicPlaying = true;
              toggleBtn.classList.add("audio-playing");
              if (btnText) btnText.textContent = "❚❚ pause";
              showToast("♫ The Weeknd — Shameless çalıyor... ♡");
            })
            .catch(() => {
              isMusicPlaying = false;
              toggleBtn.classList.remove("audio-playing");
              if (btnText) btnText.textContent = "♫ play our song";
              showToast("Tarayıcı ses oynatmayı engelledi, lütfen tekrar tıklayın 🤍", 3500);
            });
        } else {
          isMusicPlaying = false;
          toggleBtn.classList.remove("audio-playing");
          if (btnText) btnText.textContent = "♫ play our song";
          showToast("Ses oynatılamadı, lütfen sayfayı yenileyin 🤍", 3500);
        }
      });
  }

  toggleBtn.addEventListener("click", () => {
    if (audio.paused) {
      startPlayback();
    } else {
      audio.pause();
      isMusicPlaying = false;
      toggleBtn.classList.remove("audio-playing");
      if (btnText) btnText.textContent = "♫ play our song";
    }
  });

  audio.addEventListener("ended", () => {
    isMusicPlaying = false;
    toggleBtn.classList.remove("audio-playing");
    if (btnText) btnText.textContent = "♫ play our song";
  });
}

/* ==========================================================================
   4. AMBIENT STARFIELD & PARTICLES CANVAS
   ========================================================================== */
function initAmbientStars() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Generate gentle twinkling stars
  const starsCount = Math.min(Math.floor((width * height) / 18000), 55);
  const stars = [];

  for (let i = 0; i < starsCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.7 + 0.3,
      pulseSpeed: Math.random() * 0.02 + 0.008,
      color: Math.random() > 0.5 ? "#F6C9D8" : "#BBDDF5"
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Speed multiplier if music is playing
    const speedMult = isMusicPlaying ? 2.2 : 1;

    stars.forEach((star) => {
      star.alpha += star.pulseSpeed * speedMult;
      if (star.alpha > 0.85 || star.alpha < 0.2) {
        star.pulseSpeed = -star.pulseSpeed;
      }

      ctx.beginPath();
      ctx.arc(star.x, star.y, isMusicPlaying ? star.radius * 1.3 : star.radius, 0, Math.PI * 2);
      ctx.fillStyle = star.color;
      ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   5. STICKY HEADER & MOBILE NAVIGATION
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById("site-header");
  const mobileToggle = document.getElementById("mobile-nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  }, { passive: true });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    // Close menu when clicking link
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }
}

/* ==========================================================================
   6. CUSTOM DESKTOP CURSOR
   ========================================================================== */
function initCustomCursor() {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  if (!dot || !ring) return;

  // Touch device check
  if (window.matchMedia("(pointer: coarse)").matches) {
    dot.style.display = "none";
    ring.style.display = "none";
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function updateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(updateRing);
  }
  updateRing();

  // Hover states on interactive elements
  const interactives = document.querySelectorAll("a, button, .polaroid-3d-card, .letter-envelope-card, .motif-badge, #capybara-chaser, .timeline-polaroid");
  interactives.forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
}

/* ==========================================================================
   7. 3D POLAROID CARD FLIP HANDLER
   ========================================================================== */
function flipCard(cardElement) {
  if (!cardElement) return;
  cardElement.classList.toggle("flipped");
}

/* ==========================================================================
   8. LIGHTBOX VIEWER
   ========================================================================== */
function openLightbox(src, caption) {
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const cap = document.getElementById("lightbox-caption");

  if (!modal || !img) return;

  img.src = src;
  if (cap) cap.textContent = caption || "";
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

// Close lightbox on outer background click
document.getElementById("lightbox-modal")?.addEventListener("click", (e) => {
  if (e.target.id === "lightbox-modal") closeLightbox();
});

/* ==========================================================================
   9. "OPEN WHEN..." LETTERS HANDLER
   ========================================================================== */
function openLetter(letterId) {
  const data = letterContents[letterId];
  if (!data) return;

  const modal = document.getElementById("letter-modal");
  const titleEl = document.getElementById("letter-modal-title");
  const bodyEl = document.getElementById("letter-modal-body");

  if (!modal || !titleEl || !bodyEl) return;

  titleEl.textContent = data.title;
  bodyEl.textContent = data.body;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function closeLetter() {
  const modal = document.getElementById("letter-modal");
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

document.getElementById("letter-modal")?.addEventListener("click", (e) => {
  if (e.target.id === "letter-modal") closeLetter();
});

/* ==========================================================================
   10. CAPYBARA MINI-GAME EASTER EGG
   ========================================================================== */
let capybaraCatchCount = 0;

function initCapybaraEasterEgg() {
  const capy = document.getElementById("capybara-chaser");
  if (!capy) return;

  // Initial positioning
  repositionCapybara(capy);

  capy.addEventListener("click", () => {
    capybaraCatchCount++;

    if (capybaraCatchCount < 4) {
      showToast(`🐾 Capybara kaçtı! (${capybaraCatchCount}/4 yakalandı)`);
      repositionCapybara(capy);
    } else {
      // Achievement Unlocked!
      capy.style.display = "none";
      const achieveModal = document.getElementById("capybara-achieve-modal");
      if (achieveModal) {
        achieveModal.classList.add("active");
      }
    }
  });
}

function repositionCapybara(el) {
  const padding = 60;
  const maxX = window.innerWidth - padding - 60;
  const maxY = window.innerHeight - padding - 60;

  const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
  const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

  el.style.left = `${randomX}px`;
  el.style.top = `${randomY}px`;
  el.style.right = "auto";
  el.style.bottom = "auto";
}

function closeCapybaraModal() {
  const modal = document.getElementById("capybara-achieve-modal");
  if (modal) modal.classList.remove("active");
}

/* ==========================================================================
   11. SECRET "BURAYA BASMA" MODAL
   ========================================================================== */
document.getElementById("dont-click-btn")?.addEventListener("click", () => {
  const modal = document.getElementById("secret-modal");
  if (modal) modal.classList.add("active");
});

function closeSecretModal() {
  const modal = document.getElementById("secret-modal");
  if (modal) modal.classList.remove("active");
}

/* ==========================================================================
   12. TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(message, duration = 3000) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.4s ease";
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

/* ==========================================================================
   13. CHARACTER MOTIFS EASTER EGGS (SPIDEY & MCQUEEN)
   ========================================================================== */
function initBadgesEasterEggs() {
  document.getElementById("hero-spidey-badge")?.addEventListener("click", () => {
    showToast("🕷️ Yusuf'un örümcek hisleri diyor ki: Çiğdem çok yakınında!");
  });

  document.getElementById("hero-mcqueen-badge")?.addEventListener("click", () => {
    showToast("⚡ Kachow! İlişki hızı: Frenler tutmuyor.");
  });

  document.getElementById("hero-lily-badge")?.addEventListener("click", () => {
    showToast("🌸 Çiğdem'in en sevdiği zambak çiçeği.");
  });

  document.getElementById("hero-capybara-badge")?.addEventListener("click", () => {
    showToast("🤎 Capybara onayı: İlişki maksimum huzurda.");
  });
}

/* ==========================================================================
   14. SCROLL INTERSECTION OBSERVER & LILY BLOOMING
   ========================================================================== */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;

  // Blooming Lily on Chapter 03 ("Biz olduk")
  const crownItem = document.getElementById("event-biz-olduk");
  if (crownItem) {
    const lilyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            crownItem.classList.add("bloomed");
          }
        });
      },
      { threshold: 0.3 }
    );
    lilyObserver.observe(crownItem);
  }
}

/* ==========================================================================
   15. FINAL FOOTER SECRET ("psst...")
   ========================================================================== */
function initFooterSecret() {
  const psst = document.getElementById("footer-psst");
  if (!psst) return;

  let clicks = 0;
  psst.addEventListener("click", () => {
    clicks++;
    if (clicks === 1) {
      psst.textContent = "still here?";
    } else if (clicks === 2) {
      psst.textContent = "good.";
    } else if (clicks === 3) {
      psst.textContent = "there's a lot more to come 🤍";
      showToast("🤍 Birlikte yazılacak binlerce sayfa var...");
    }
  });
}
