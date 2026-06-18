(function () {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const linkedinUrl = "https://jp.linkedin.com/in/mrkant";

  const selectors = {
    menuToggle: document.querySelector(".menu-toggle"),
    mainNav: document.querySelector("#mainNav"),
    navLinks: document.querySelectorAll(".site-nav a"),
    typingText: document.querySelector("#typingText"),
    audienceTabs: document.querySelectorAll(".audience-tab"),
    audiencePanel: document.querySelector("#audiencePanel"),
    filterButtons: document.querySelectorAll(".filter-button"),
    portfolioGrid: document.querySelector("#portfolioGrid"),
    caseStudyList: document.querySelector("#caseStudyList"),
    frameworkGrid: document.querySelector("#frameworkGrid"),
    serviceGrid: document.querySelector("#serviceGrid"),
    modal: document.querySelector("#skuModal"),
    backToTop: document.querySelector("#backToTop"),
    contactForm: document.querySelector("#contactForm"),
    currentYear: document.querySelector("#currentYear")
  };

  const typingWords = [
    "SEO",
    "SEM",
    "Paid Search",
    "eCommerce Growth",
    "Affiliate Strategy",
    "Social Media",
    "Traditional Marketing",
    "Analytics",
    "Agency Governance",
    "APAC Search Strategy"
  ];

  let typingWordIndex = 0;
  let typingCharIndex = 0;
  let deleting = false;
  let typingTimer;

  function startTypingEffect() {
    if (!selectors.typingText || prefersReducedMotion) {
      if (selectors.typingText) selectors.typingText.textContent = typingWords.join(" + ");
      return;
    }

    const currentWord = typingWords[typingWordIndex];
    const visibleText = deleting
      ? currentWord.slice(0, Math.max(typingCharIndex - 1, 0))
      : currentWord.slice(0, typingCharIndex + 1);

    selectors.typingText.textContent = visibleText;
    typingCharIndex = deleting ? typingCharIndex - 1 : typingCharIndex + 1;

    let delay = deleting ? 45 : 90;

    if (!deleting && visibleText === currentWord) {
      delay = 1400;
      deleting = true;
    }

    if (deleting && visibleText === "") {
      deleting = false;
      typingWordIndex = (typingWordIndex + 1) % typingWords.length;
      typingCharIndex = 0;
      delay = 300;
    }

    typingTimer = window.setTimeout(startTypingEffect, delay);
  }

  function closeMobileMenu() {
    if (!selectors.mainNav || !selectors.menuToggle) return;
    selectors.mainNav.classList.remove("is-open");
    selectors.menuToggle.classList.remove("is-active");
    selectors.menuToggle.setAttribute("aria-expanded", "false");
  }

  function setupNavigation() {
    if (selectors.currentYear) selectors.currentYear.textContent = new Date().getFullYear();

    if (selectors.menuToggle && selectors.mainNav) {
      selectors.menuToggle.addEventListener("click", () => {
        const expanded = selectors.menuToggle.getAttribute("aria-expanded") === "true";
        selectors.menuToggle.setAttribute("aria-expanded", String(!expanded));
        selectors.menuToggle.classList.toggle("is-active");
        selectors.mainNav.classList.toggle("is-open");
      });
    }

    selectors.navLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const target = document.querySelector(targetId);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
        history.pushState(null, "", targetId);
      });
    });

    if (selectors.backToTop) {
      selectors.backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
      });
    }

    setupActiveNavigation();
  }

  function setupActiveNavigation() {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const activeId = entry.target.getAttribute("id");
        selectors.navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 });

    sections.forEach((section) => observer.observe(section));
  }

  function renderAudience(type = "recruiter") {
    if (!selectors.audiencePanel || !audienceContent[type]) return;
    const content = audienceContent[type];
    selectors.audiencePanel.innerHTML = `
      <span class="eyebrow">${escapeHtml(content.label)}</span>
      <h3>${escapeHtml(content.title)}</h3>
      <p>${escapeHtml(content.body)}</p>
      <ul class="check-list">
        ${content.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
      <div class="card-actions">
        ${content.actions.map((action, index) => {
          const buttonClass = index === 0 ? "button button-primary" : "button button-secondary";
          const external = action.href.startsWith("http") ? 'target="_blank" rel="noopener"' : "";
          const download = action.href.includes("assets/resumes") ? "download" : "";
          return `<a class="${buttonClass}" href="${escapeAttribute(action.href)}" ${external} ${download}>${escapeHtml(action.text)}</a>`;
        }).join("")}
      </div>
    `;
  }

  function setupAudienceGateway() {
    renderAudience("recruiter");

    selectors.audienceTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const type = tab.dataset.audience;
        selectors.audienceTabs.forEach((button) => {
          button.classList.remove("is-active");
          button.setAttribute("aria-selected", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        selectors.audiencePanel.setAttribute("aria-labelledby", tab.id);
        renderAudience(type);
      });
    });
  }

  function renderPortfolio(filter = "All") {
    if (!selectors.portfolioGrid) return;
    const filteredItems = filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

    selectors.portfolioGrid.innerHTML = filteredItems.map((item) => `
      <article class="portfolio-card glass-card" data-category="${escapeAttribute(item.category)}">
        <div class="card-topline">
          <span class="pill">${escapeHtml(item.category)}</span>
          <span class="company-label">${escapeHtml(item.company)}</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
        <div class="mini-detail">
          <strong>Impact:</strong>
          <span>${escapeHtml(item.impact)}</span>
        </div>
        <div class="tag-row">
          ${item.tags.slice(0, 4).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>
        <button class="text-button learn-more" type="button" data-sku-id="${escapeAttribute(item.id)}">Learn More</button>
      </article>
    `).join("");

    selectors.portfolioGrid.querySelectorAll(".learn-more").forEach((button) => {
      button.addEventListener("click", () => openModal(button.dataset.skuId, button));
    });
  }

  function setupPortfolioFilters() {
    renderPortfolio("All");

    selectors.filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        selectors.filterButtons.forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        renderPortfolio(button.dataset.filter);
      });
    });
  }

  let lastFocusedElement = null;

  function openModal(itemId, triggerElement) {
    const item = portfolioItems.find((entry) => entry.id === itemId);
    if (!item || !selectors.modal) return;
    lastFocusedElement = triggerElement || document.activeElement;

    selectors.modal.querySelector("#modalCategory").textContent = item.category;
    selectors.modal.querySelector("#modalTitle").textContent = item.title;
    selectors.modal.querySelector("#modalIntro").textContent = item.summary;
    selectors.modal.querySelector("#modalProblem").textContent = item.problem;
    selectors.modal.querySelector("#modalAction").textContent = item.action;
    selectors.modal.querySelector("#modalTools").textContent = item.tools;
    selectors.modal.querySelector("#modalImpact").textContent = item.impact;
    selectors.modal.querySelector("#modalTags").innerHTML = item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");

    selectors.modal.hidden = false;
    document.body.classList.add("modal-open");
    selectors.modal.querySelector(".modal-close").focus();
  }

  function closeModal() {
    if (!selectors.modal) return;
    selectors.modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  function setupModal() {
    if (!selectors.modal) return;
    selectors.modal.querySelectorAll("[data-close-modal]").forEach((element) => {
      element.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !selectors.modal.hidden) {
        closeModal();
      }

      if (event.key === "Tab" && !selectors.modal.hidden) {
        trapModalFocus(event);
      }
    });
  }

  function trapModalFocus(event) {
    const focusable = selectors.modal.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function renderCaseStudies() {
    if (!selectors.caseStudyList) return;
    selectors.caseStudyList.innerHTML = caseStudies.map((caseStudy, index) => `
      <article class="accordion-item">
        <button class="accordion-trigger" type="button" aria-expanded="${index === 0 ? "true" : "false"}" aria-controls="case-${index}">
          <span>
            <strong>${escapeHtml(caseStudy.title)}</strong>
            <small>${escapeHtml(caseStudy.company)}</small>
          </span>
          <span class="accordion-icon" aria-hidden="true">+</span>
        </button>
        <div class="accordion-panel" id="case-${index}" ${index === 0 ? "" : "hidden"}>
          ${renderCaseDetail("Situation", caseStudy.situation)}
          ${renderCaseDetail("Challenge", caseStudy.challenge)}
          ${renderCaseDetail("Strategy", caseStudy.strategy)}
          ${renderCaseDetail("Execution", caseStudy.execution)}
          ${renderCaseDetail("Result", caseStudy.result)}
          ${renderCaseDetail("Tools / Channels", caseStudy.tools)}
          ${renderCaseDetail("Business lesson", caseStudy.lesson)}
        </div>
      </article>
    `).join("");

    selectors.caseStudyList.querySelectorAll(".accordion-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const panel = document.getElementById(trigger.getAttribute("aria-controls"));
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", String(!isExpanded));
        panel.hidden = isExpanded;
      });
    });
  }

  function renderCaseDetail(label, content) {
    return `
      <div class="case-detail">
        <h3>${escapeHtml(label)}</h3>
        <p>${escapeHtml(content)}</p>
      </div>
    `;
  }

  function renderFrameworks() {
    if (!selectors.frameworkGrid) return;
    selectors.frameworkGrid.innerHTML = frameworks.map((item) => `
      <article class="framework-card glass-card">
        <div class="card-topline">
          <span class="pill">${escapeHtml(item.topic)}</span>
          <span class="company-label">${escapeHtml(item.audience)}</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
        <div class="card-actions">
          <a class="button button-small button-secondary" href="${escapeAttribute(item.linkedin)}" target="_blank" rel="noopener">Read on LinkedIn</a>
          <a class="button button-small button-ghost" href="${escapeAttribute(item.pdf)}">Download PDF</a>
        </div>
      </article>
    `).join("");
  }

  function renderServices() {
    if (!selectors.serviceGrid) return;
    selectors.serviceGrid.innerHTML = services.map((service) => `
      <article class="service-card glass-card">
        <h3>${escapeHtml(service.title)}</h3>
        <dl>
          <div>
            <dt>Who it is for</dt>
            <dd>${escapeHtml(service.forWhom)}</dd>
          </div>
          <div>
            <dt>Problem solved</dt>
            <dd>${escapeHtml(service.problem)}</dd>
          </div>
          <div>
            <dt>Deliverable</dt>
            <dd>${escapeHtml(service.deliverable)}</dd>
          </div>
          <div>
            <dt>Engagement</dt>
            <dd>${escapeHtml(service.engagement)}</dd>
          </div>
        </dl>
        <a class="button button-small button-primary" href="#contact">Discuss this service</a>
      </article>
    `).join("");
  }

  function setupContactForm() {
    if (!selectors.contactForm) return;

    selectors.contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const fields = {
        name: form.name,
        email: form.email,
        audienceType: form.audienceType,
        contactReason: form.contactReason,
        message: form.message,
        consent: form.consent
      };

      clearFormErrors();
      let valid = true;

      if (!fields.name.value.trim()) {
        setFieldError("name", "Please enter your name.");
        valid = false;
      }

      if (!isValidEmail(fields.email.value)) {
        setFieldError("email", "Please enter a valid email address.");
        valid = false;
      }

      if (!fields.audienceType.value) {
        setFieldError("audienceType", "Please select your audience type.");
        valid = false;
      }

      if (!fields.contactReason.value) {
        setFieldError("contactReason", "Please select a reason for contact.");
        valid = false;
      }

      if (!fields.message.value.trim() || fields.message.value.trim().length < 12) {
        setFieldError("message", "Please write at least 12 characters so the request has context.");
        valid = false;
      }

      if (!fields.consent.checked) {
        setFieldError("consent", "Please confirm you understand this static demo needs a form provider.");
        valid = false;
      }

      if (!valid) return;

      const success = document.querySelector("#formSuccess");
      const mailSubject = encodeURIComponent(`${fields.contactReason.value} request from ${fields.name.value.trim()}`);
      const mailBody = encodeURIComponent(
        `Name: ${fields.name.value.trim()}\nEmail: ${fields.email.value.trim()}\nOrganization: ${form.organization.value.trim()}\nAudience: ${fields.audienceType.value}\nReason: ${fields.contactReason.value}\n\nMessage:\n${fields.message.value.trim()}`
      );

      success.innerHTML = `Thank you. This static demo validated your message. Until a form provider is connected, please send it by email: <a href="mailto:mr.kant@outlook.com?subject=${mailSubject}&body=${mailBody}">open prepared email</a>.`;
      form.reset();
    });
  }

  function clearFormErrors() {
    document.querySelectorAll(".error-message").forEach((message) => {
      message.textContent = "";
    });
    selectors.contactForm.querySelectorAll("[aria-invalid]").forEach((field) => {
      field.removeAttribute("aria-invalid");
    });
  }

  function setFieldError(fieldName, message) {
    const error = document.querySelector(`#${fieldName}Error`);
    const field = document.querySelector(`#${fieldName}`);
    if (error) error.textContent = message;
    if (field) field.setAttribute("aria-invalid", "true");
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replaceAll("`", "&#096;");
  }

  function init() {
    setupNavigation();
    startTypingEffect();
    setupAudienceGateway();
    setupPortfolioFilters();
    setupModal();
    renderCaseStudies();
    renderFrameworks();
    renderServices();
    setupContactForm();
  }

  document.addEventListener("DOMContentLoaded", init);
  window.addEventListener("beforeunload", () => window.clearTimeout(typingTimer));
})();
