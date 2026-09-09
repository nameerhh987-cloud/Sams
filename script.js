/**
 * Sam's Fitness Ladies Gym - Interactive Logic
 * Handles dynamic rendering, pricing toggle engine, lightbox gallery, and drawer navigation.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Ensure gymData is available
  if (typeof gymData === "undefined") {
    console.error("gymData is missing! Ensure data.js is loaded prior to script.js.");
    return;
  }

  // App State
  const state = {
    billingPeriod: "monthly", // "monthly" | "quarterly"
    activeModalIndex: null
  };

  // SVG Icon Catalog (Clean vector Lucide / Feather style)
  const icons = {
    shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    award: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
    dumbbell: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1a5 5 0 0 0-7.07 0l-.93.93"/><path d="m3 3 1 1a5 5 0 0 0 7.07 0l.93-.93"/><path d="m14 10 1.41-1.41a2 2 0 0 1 2.83 0l1.17 1.17a2 2 0 0 1 0 2.83L18 14"/><path d="m10 14-1.41 1.41a2 2 0 0 1-2.83 0l-1.17-1.17a2 2 0 0 1 0-2.83L6 10"/></svg>`,
    heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    flame: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    activity: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    sparkles: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
    userCheck: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    maximize: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`,
    star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  };

  // 1. Initial Render Functions
  function renderHeroStats() {
    const statsContainer = document.getElementById("hero-stats-container");
    if (!statsContainer) return;

    statsContainer.innerHTML = gymData.brand.stats
      .map(
        (stat) => `
        <div class="stat-item">
          <div class="stat-number">${stat.count}</div>
          <div class="stat-label">${stat.label}</div>
        </div>
      `
      )
      .join("");
  }

  function renderWhyUs() {
    const container = document.getElementById("why-us-grid");
    if (!container) return;

    container.innerHTML = gymData.whyUs
      .map((item) => {
        const iconSvg = icons[item.icon] || icons.shield;
        return `
          <div class="feature-card">
            <div class="feature-icon-wrapper">
              ${iconSvg}
            </div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
        `;
      })
      .join("");
  }

  function renderPrograms() {
    const container = document.getElementById("programs-grid");
    if (!container) return;

    const iconMap = {
      flame: icons.flame,
      activity: icons.activity,
      sparkles: icons.sparkles,
      "user-check": icons.userCheck
    };

    container.innerHTML = gymData.programs
      .map((prog) => {
        const iconSvg = iconMap[prog.icon] || icons.flame;
        const encodedMsg = encodeURIComponent(
          `Hi Sam's Fitness! I am interested in the ${prog.title} program. Can you share timing & schedule details?`
        );
        const waLink = `https://wa.me/923154184055?text=${encodedMsg}`;

        const perksHtml = prog.features
          .map((f) => `<li>${icons.check} <span>${f}</span></li>`)
          .join("");

        return `
          <div class="program-card">
            <div class="program-card-header">
              <div class="program-icon-box">${iconSvg}</div>
              <span class="program-badge">${prog.badge}</span>
            </div>
            <h3>${prog.title}</h3>
            <p>${prog.desc}</p>
            <ul class="program-features-list">
              ${perksHtml}
            </ul>
            <a href="${waLink}" target="_blank" rel="noopener" class="program-action-link">
              Inquire About This Program ${icons.arrowRight}
            </a>
          </div>
        `;
      })
      .join("");
  }

  function renderGallery() {
    const container = document.getElementById("gallery-grid");
    if (!container) return;

    container.innerHTML = gymData.gallery
      .map(
        (item, index) => `
        <div class="gallery-item" data-index="${index}">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <div class="gallery-overlay">
            <span class="gallery-tag">${item.tag}</span>
            <h4>${item.title}</h4>
            <p>${item.subtitle}</p>
          </div>
          <div class="gallery-zoom-icon">
            ${icons.maximize}
          </div>
        </div>
      `
      )
      .join("");

    // Attach click listeners to gallery items
    const items = container.querySelectorAll(".gallery-item");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        const index = parseInt(item.getAttribute("data-index"), 10);
        openLightbox(index);
      });
    });
  }

  function renderPricing() {
    const container = document.getElementById("pricing-container");
    if (!container) return;

    const isQuarterly = state.billingPeriod === "quarterly";

    container.innerHTML = gymData.pricingData
      .map((tier) => {
        const price = isQuarterly ? tier.quarterlyPKR : tier.monthlyPKR;
        const periodText = isQuarterly ? "Per 3 Months (Quarterly)" : "Per Month";
        const savingsText = isQuarterly ? tier.savingsNote : "Billed monthly • Cancel anytime";
        const isFeatured = tier.popular;

        const encodedMsg = encodeURIComponent(
          `Hi Sam's Fitness! I want to join the ${tier.title} plan (${isQuarterly ? "Quarterly 3-Month Plan" : "Monthly Plan"}). Please guide me with admission.`
        );
        const waLink = `https://wa.me/923154184055?text=${encodedMsg}`;

        const perksHtml = tier.perks
          .map((p) => `<li>${icons.check} <span>${p}</span></li>`)
          .join("");

        return `
          <div class="pricing-card ${isFeatured ? "featured-card" : ""}">
            ${
              isFeatured
                ? `<div class="pricing-badge-wrapper">${tier.badge}</div>`
                : ""
            }
            <div class="pricing-header">
              <h3 class="pricing-tier-name">${tier.title}</h3>
              <p class="pricing-tier-sub">${tier.subtitle}</p>
            </div>

            <div class="pricing-amount-box">
              <span class="pricing-currency">PKR</span>
              <span class="pricing-value" data-tier="${tier.id}">${price.toLocaleString()}</span>
              <span class="pricing-period">${periodText}</span>
              <div class="pricing-savings-note">${savingsText}</div>
            </div>

            <ul class="pricing-perks-list">
              ${perksHtml}
            </ul>

            <a href="${waLink}" target="_blank" rel="noopener" class="btn ${isFeatured ? "btn-primary" : "btn-secondary"}">
              ${tier.ctaText}
            </a>
          </div>
        `;
      })
      .join("");
  }

  function renderTestimonials() {
    const container = document.getElementById("testimonials-grid");
    if (!container) return;

    container.innerHTML = gymData.testimonials
      .map(
        (t) => `
        <div class="testimonial-card">
          <div class="testimonial-rating">
            ${icons.star}${icons.star}${icons.star}${icons.star}${icons.star}
          </div>
          <p class="testimonial-text">"${t.comment}"</p>
          <div class="testimonial-author">
            <div class="author-avatar-initial">${t.name.charAt(0)}</div>
            <div class="author-info">
              <h4>${t.name}</h4>
              <span class="result-tag">${t.result} • ${t.area}</span>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }

  // 2. Pricing Switcher Handler
  function setupPricingToggle() {
    const toggle = document.getElementById("pricing-toggle");
    const labelMonthly = document.getElementById("label-monthly");
    const labelQuarterly = document.getElementById("label-quarterly");

    if (!toggle || !labelMonthly || !labelQuarterly) return;

    function updateState(newPeriod) {
      state.billingPeriod = newPeriod;
      if (newPeriod === "quarterly") {
        toggle.classList.add("quarterly");
        labelQuarterly.classList.add("active");
        labelMonthly.classList.remove("active");
      } else {
        toggle.classList.remove("quarterly");
        labelMonthly.classList.add("active");
        labelQuarterly.classList.remove("active");
      }
      renderPricing();
    }

    toggle.addEventListener("click", () => {
      const next = state.billingPeriod === "monthly" ? "quarterly" : "monthly";
      updateState(next);
    });

    labelMonthly.addEventListener("click", () => updateState("monthly"));
    labelQuarterly.addEventListener("click", () => updateState("quarterly"));
  }

  // 3. Lightbox Modal Logic
  const lightboxModal = document.getElementById("gallery-modal");
  const lightboxImg = document.getElementById("modal-img");
  const lightboxTitle = document.getElementById("modal-title");
  const lightboxDesc = document.getElementById("modal-desc");
  const lightboxCloseBtn = document.getElementById("modal-close-btn");

  function openLightbox(index) {
    const item = gymData.gallery[index];
    if (!item || !lightboxModal) return;

    state.activeModalIndex = index;
    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = `${item.subtitle} • ${item.tag}`;

    lightboxModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove("active");
    document.body.style.overflow = "";
    state.activeModalIndex = null;
  }

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener("click", closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxModal && lightboxModal.classList.contains("active")) {
      closeLightbox();
    }
  });

  // 4. Navbar Scroll Effect
  const navbar = document.querySelector(".navbar-wrapper");
  function handleScroll() {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // 5. Mobile Drawer Menu
  const mobileToggleBtn = document.getElementById("mobile-toggle-btn");
  const mobileCloseBtn = document.getElementById("mobile-close-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileBackdrop = document.getElementById("mobile-backdrop");
  const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

  function openDrawer() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.add("active");
      mobileBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function closeDrawer() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.remove("active");
      mobileBackdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (mobileToggleBtn) mobileToggleBtn.addEventListener("click", openDrawer);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener("click", closeDrawer);
  if (mobileBackdrop) mobileBackdrop.addEventListener("click", closeDrawer);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  // Initialize all dynamic blocks
  renderHeroStats();
  renderWhyUs();
  renderPrograms();
  renderGallery();
  renderPricing();
  renderTestimonials();
  setupPricingToggle();
});
