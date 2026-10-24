/**
 * Jeev Daya - Main Application JavaScript
 * Controls navigation, interactivity, forms, localStorage synchronization, and modals.
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  highlightActiveNav();

  // Page specific handlers
  const page = getCurrentPageName();
  if (page === "index.html" || page === "" || page === "/") {
    initHomePage();
  } else if (page === "report-rescue.html") {
    initReportRescuePage();
  } else if (page === "rescue-cases.html") {
    initRescueCasesPage();
  } else if (page === "find-help.html") {
    initFindHelpPage();
  } else if (page === "volunteer.html") {
    initVolunteerPage();
  } else if (page === "donate.html") {
    initDonatePage();
  } else if (page === "contact.html") {
    initContactPage();
  }

  initAccordions();
});

/* --------------------------------------------------------------------------
   Helpers & Navigation
   -------------------------------------------------------------------------- */
function getCurrentPageName() {
  const path = window.location.pathname;
  return path.substring(path.lastIndexOf("/") + 1);
}

function initNavbar() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileNav = document.getElementById("mobile-nav");

  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
      const icon = hamburgerBtn.querySelector("i");
      if (icon) {
        if (mobileNav.classList.contains("active")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });

    // Close mobile nav when clicking outside
    document.addEventListener("click", (e) => {
      if (!hamburgerBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove("active");
        const icon = hamburgerBtn.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });
  }
}

function highlightActiveNav() {
  const current = getCurrentPageName() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current || (current === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/* --------------------------------------------------------------------------
   Toast Notifications
   -------------------------------------------------------------------------- */
function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  const icon = type === "success" ? "fa-circle-check" : "fa-circle-exclamation";
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* --------------------------------------------------------------------------
   Accordions (FAQ & First Aid)
   -------------------------------------------------------------------------- */
function initAccordions() {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isActive = item.classList.contains("active");

      // Optional: close other accordions in the same list
      const parent = item.parentElement;
      if (parent) {
        parent.querySelectorAll(".accordion-item").forEach((other) => {
          other.classList.remove("active");
        });
      }

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Page 1: Home Page
   -------------------------------------------------------------------------- */
function initHomePage() {
  const urgentCasesContainer = document.getElementById("home-urgent-cases");
  if (!urgentCasesContainer) return;

  const cases = typeof getRescueCases === "function" ? getRescueCases() : [];
  // Take first 3 urgent / critical / in-treatment cases
  const recentCases = cases.slice(0, 3);

  if (recentCases.length === 0) {
    urgentCasesContainer.innerHTML = "<p>No active rescue cases right now.</p>";
    return;
  }

  urgentCasesContainer.innerHTML = recentCases
    .map((item) => createCaseCardHTML(item))
    .join("");
}

/* --------------------------------------------------------------------------
   Page 2: Report Rescue Page
   -------------------------------------------------------------------------- */
function initReportRescuePage() {
  const reportForm = document.getElementById("rescue-report-form");
  const gpsBtn = document.getElementById("detect-gps-btn");
  const locationInput = document.getElementById("animal-location");
  const photoInput = document.getElementById("animal-photo");
  const previewBox = document.getElementById("upload-preview");
  const previewImg = document.getElementById("preview-img");
  const removeImgBtn = document.getElementById("remove-img-btn");
  const modal = document.getElementById("rescue-modal");
  const closeModalBtn = document.getElementById("close-rescue-modal");

  let uploadedImageData = "";

  // GPS Location Detection
  if (gpsBtn && locationInput) {
    gpsBtn.addEventListener("click", () => {
      if (!navigator.geolocation) {
        showToast("Geolocation is not supported by your browser.", "danger");
        return;
      }

      gpsBtn.disabled = true;
      gpsBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Locating...`;

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(5);
          const lng = position.coords.longitude.toFixed(5);
          locationInput.value = `GPS: [${lat}, ${lng}] - Near Highway/Crossroad (Locality Auto-detected)`;
          gpsBtn.disabled = false;
          gpsBtn.innerHTML = `<i class="fa-solid fa-check"></i> Located`;
          showToast("Location successfully captured!", "success");
        },
        (error) => {
          gpsBtn.disabled = false;
          gpsBtn.innerHTML = `<i class="fa-solid fa-location-crosshairs"></i> Use My GPS`;
          showToast("Unable to retrieve location. Please type manually.", "danger");
        },
        { timeout: 10000 }
      );
    });
  }

  // Image Upload Preview
  if (photoInput && previewBox && previewImg) {
    photoInput.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          showToast("File size too large. Please select under 5MB.", "danger");
          this.value = "";
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          uploadedImageData = e.target.result;
          previewImg.src = uploadedImageData;
          previewBox.style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (removeImgBtn && previewBox && photoInput) {
    removeImgBtn.addEventListener("click", () => {
      uploadedImageData = "";
      photoInput.value = "";
      previewBox.style.display = "none";
      previewImg.src = "";
    });
  }

  // Form Submit
  if (reportForm) {
    reportForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const animalType = document.getElementById("animal-type").value;
      const severity = document.getElementById("severity-level").value;
      const location = locationInput ? locationInput.value.trim() : "";
      const city = document.getElementById("city-select").value;
      const reporterName = document.getElementById("reporter-name").value.trim();
      const reporterPhone = document.getElementById("reporter-phone").value.trim();
      const description = document.getElementById("case-details").value.trim();

      if (!animalType || !severity || !location || !reporterPhone) {
        showToast("Please fill in all mandatory fields.", "danger");
        return;
      }

      // Generate Random Ticket ID
      const ticketNumber = Math.floor(1000 + Math.random() * 9000);
      const ticketId = `JD-${ticketNumber}`;

      // Species fallback photos if no photo uploaded
      const defaultPhotos = {
        Dog: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&q=80",
        Cat: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=700&q=80",
        Cattle: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=700&q=80",
        Bird: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=700&q=80",
        Wildlife: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=700&q=80",
        Other: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=700&q=80"
      };

      const newCase = {
        id: ticketId,
        name: `${animalType} (Emergency Report)`,
        species: animalType,
        status: severity === "critical" ? "critical" : "treatment",
        statusLabel: severity === "critical" ? "Critical Care" : "Dispatched / In Treatment",
        badgeClass: severity === "critical" ? "badge-critical" : "badge-treatment",
        location: `${location}, ${city}`,
        city: city,
        reportedTime: "Just now",
        rescuer: "Nearest Rescuer Alerted",
        condition: description || `Reported by ${reporterName || "Good Samaritan"}. Contact: ${reporterPhone}`,
        image: uploadedImageData || defaultPhotos[animalType] || defaultPhotos.Other,
        progress: 15,
        fundGoal: 5000,
        fundRaised: 0
      };

      if (typeof saveRescueCase === "function") {
        saveRescueCase(newCase);
      }

      // Populate Modal
      const ticketSpan = document.getElementById("modal-ticket-id");
      const reporterPhoneSpan = document.getElementById("modal-reporter-phone");
      if (ticketSpan) ticketSpan.textContent = ticketId;
      if (reporterPhoneSpan) reporterPhoneSpan.textContent = reporterPhone;

      if (modal) modal.classList.add("active");
      reportForm.reset();
      if (previewBox) previewBox.style.display = "none";
      uploadedImageData = "";
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }
}

/* --------------------------------------------------------------------------
   Page 3: Rescue Cases Page
   -------------------------------------------------------------------------- */
function initRescueCasesPage() {
  const container = document.getElementById("cases-grid-container");
  const searchInput = document.getElementById("case-search-input");
  const filterButtons = document.querySelectorAll(".filter-btn[data-filter]");
  const speciesSelect = document.getElementById("species-filter-select");

  if (!container) return;

  const allCases = typeof getRescueCases === "function" ? getRescueCases() : [];
  let currentFilter = "all";
  let currentSpecies = "all";
  let searchQuery = "";

  function render() {
    let filtered = allCases.filter((item) => {
      const matchStatus = currentFilter === "all" || item.status === currentFilter;
      const matchSpecies = currentSpecies === "all" || item.species.toLowerCase() === currentSpecies.toLowerCase();
      const matchSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery) ||
        item.location.toLowerCase().includes(searchQuery) ||
        item.id.toLowerCase().includes(searchQuery) ||
        item.condition.toLowerCase().includes(searchQuery);

      return matchStatus && matchSpecies && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem; color: #94a3b8;">
            <i class="fa-solid fa-paw"></i>
          </div>
          <h3>No matching rescue cases found</h3>
          <p style="color: #64748b; margin-top: 0.5rem;">Try adjusting your filter or search keywords.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((c) => createCaseCardHTML(c)).join("");
  }

  // Filter Button Clicks
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      render();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      render();
    });
  }

  // Species Dropdown
  if (speciesSelect) {
    speciesSelect.addEventListener("change", (e) => {
      currentSpecies = e.target.value;
      render();
    });
  }

  // Initial render
  render();
}

function createCaseCardHTML(item) {
  const percent = Math.min(100, Math.round((item.fundRaised / item.fundGoal) * 100)) || item.progress || 20;

  return `
    <div class="case-card">
      <div class="case-thumb">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&q=80'">
        <span class="badge ${item.badgeClass} case-badge">${item.statusLabel}</span>
        <span class="case-id-tag">${item.id}</span>
      </div>
      <div class="case-body">
        <h3 class="case-title">${item.name}</h3>
        <div class="case-meta">
          <div class="case-meta-row">
            <i class="fa-solid fa-location-dot"></i>
            <span>${item.location}</span>
          </div>
          <div class="case-meta-row">
            <i class="fa-solid fa-clock"></i>
            <span>Reported ${item.reportedTime}</span>
          </div>
          <div class="case-meta-row">
            <i class="fa-solid fa-user-shield"></i>
            <span>${item.rescuer}</span>
          </div>
        </div>
        <p class="case-desc">${item.condition}</p>
        
        <div class="case-progress-wrap">
          <div class="case-progress-labels">
            <span>Recovery Fund</span>
            <span>₹${item.fundRaised} / ₹${item.fundGoal}</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${percent}%;"></div>
          </div>
        </div>

        <div class="case-footer">
          <a href="donate.html?caseId=${item.id}&name=${encodeURIComponent(item.name)}" class="btn btn-primary btn-block">
            <i class="fa-solid fa-heart"></i> Support Care
          </a>
        </div>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   Page 4: Find Help (Clinics & Emergency)
   -------------------------------------------------------------------------- */
function initFindHelpPage() {
  const container = document.getElementById("clinics-directory-grid");
  const cityFilter = document.getElementById("clinic-city-filter");
  const searchInput = document.getElementById("clinic-search-input");

  if (!container) return;

  const clinics = typeof getClinics === "function" ? getClinics() : [];
  let selectedCity = "all";
  let searchWord = "";

  function renderClinics() {
    const filtered = clinics.filter((c) => {
      const matchCity = selectedCity === "all" || c.city.toLowerCase() === selectedCity.toLowerCase();
      const matchSearch =
        !searchWord ||
        c.name.toLowerCase().includes(searchWord) ||
        c.address.toLowerCase().includes(searchWord) ||
        c.services.some((s) => s.toLowerCase().includes(searchWord));
      return matchCity && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
          <i class="fa-solid fa-hospital" style="font-size: 2.5rem; color: #94a3b8; margin-bottom: 0.8rem;"></i>
          <h3>No clinics found for this search</h3>
          <p style="color: #64748b;">Please broaden your city or search criteria.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered
      .map(
        (c) => `
      <div class="clinic-card">
        <div class="clinic-header">
          <div>
            <h3 class="clinic-title">${c.name}</h3>
            <span style="font-size: 0.85rem; color: #f59e0b; font-weight: 700;">
              ⭐ ${c.rating} <span style="color: #64748b; font-weight: normal;">(${c.reviews} reviews)</span>
            </span>
          </div>
          <span class="badge ${c.isEmergency ? "badge-critical" : "badge-blue"}">
            ${c.isEmergency ? "24x7 Emergency" : "Open Today"}
          </span>
        </div>

        <div class="clinic-services">
          ${c.services.map((s) => `<span class="service-pill">${s}</span>`).join("")}
        </div>

        <div class="clinic-contacts">
          <div class="clinic-contact-row">
            <i class="fa-solid fa-location-dot"></i>
            <span>${c.address}</span>
          </div>
          <div class="clinic-contact-row">
            <i class="fa-solid fa-clock"></i>
            <span>${c.timings}</span>
          </div>
          <div class="clinic-contact-row">
            <i class="fa-solid fa-phone"></i>
            <a href="tel:${c.phone}" style="color: var(--primary); font-weight: 600;">${c.phone}</a>
          </div>
        </div>

        <div style="display: flex; gap: 0.6rem; margin-top: auto;">
          <a href="tel:${c.phone}" class="btn btn-primary" style="flex: 1;">
            <i class="fa-solid fa-phone"></i> Call Clinic
          </a>
          <a href="https://maps.google.com/?q=${encodeURIComponent(c.name + " " + c.address)}" target="_blank" rel="noopener" class="btn btn-outline" style="flex: 1;">
            <i class="fa-solid fa-diamond-turn-right"></i> Directions
          </a>
        </div>
      </div>
    `
      )
      .join("");
  }

  if (cityFilter) {
    cityFilter.addEventListener("change", (e) => {
      selectedCity = e.target.value;
      renderClinics();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchWord = e.target.value.toLowerCase().trim();
      renderClinics();
    });
  }

  renderClinics();
}

/* --------------------------------------------------------------------------
   Page 5: Volunteer Page
   -------------------------------------------------------------------------- */
function initVolunteerPage() {
  const form = document.getElementById("volunteer-application-form");
  const modal = document.getElementById("volunteer-modal");
  const closeModalBtn = document.getElementById("close-volunteer-modal");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("vol-name").value.trim();
      const email = document.getElementById("vol-email").value.trim();
      const phone = document.getElementById("vol-phone").value.trim();
      const role = document.getElementById("vol-role").value;

      if (!name || !email || !phone) {
        showToast("Please provide all required volunteer details.", "danger");
        return;
      }

      // Store in local storage
      const volunteers = JSON.parse(localStorage.getItem("jeevdaya_volunteers") || "[]");
      volunteers.push({
        name,
        email,
        phone,
        role,
        appliedAt: new Date().toLocaleDateString()
      });
      localStorage.setItem("jeevdaya_volunteers", JSON.stringify(volunteers));

      const nameDisplay = document.getElementById("vol-modal-name");
      if (nameDisplay) nameDisplay.textContent = name;

      if (modal) modal.classList.add("active");
      form.reset();
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }
}

/* --------------------------------------------------------------------------
   Page 6: Donate Page
   -------------------------------------------------------------------------- */
function initDonatePage() {
  const tierButtons = document.querySelectorAll(".tier-btn");
  const customAmountInput = document.getElementById("custom-amount");
  const donateForm = document.getElementById("donation-form");
  const modal = document.getElementById("donation-receipt-modal");
  const closeModalBtn = document.getElementById("close-donation-modal");

  // Check URL params for prefilled case
  const urlParams = new URLSearchParams(window.location.search);
  const caseId = urlParams.get("caseId");
  const caseName = urlParams.get("name");
  const caseAlert = document.getElementById("prefilled-case-notice");

  if (caseId && caseAlert) {
    caseAlert.style.display = "block";
    caseAlert.innerHTML = `<i class="fa-solid fa-heart" style="color: #dc2626;"></i> Donating directly in support of <strong>${decodeURIComponent(caseName || caseId)}</strong> (Ref: ${caseId})`;
  }

  let selectedAmount = 1000;

  tierButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tierButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedAmount = parseInt(btn.dataset.amount, 10);
      if (customAmountInput) customAmountInput.value = "";
    });
  });

  if (customAmountInput) {
    customAmountInput.addEventListener("focus", () => {
      tierButtons.forEach((b) => b.classList.remove("active"));
    });
    customAmountInput.addEventListener("input", (e) => {
      selectedAmount = parseInt(e.target.value, 10) || 0;
    });
  }

  if (donateForm) {
    donateForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const donorName = document.getElementById("donor-name").value.trim();
      const donorEmail = document.getElementById("donor-email").value.trim();
      const donorPan = document.getElementById("donor-pan").value.trim();

      const finalAmount = customAmountInput && customAmountInput.value ? parseInt(customAmountInput.value, 10) : selectedAmount;

      if (!finalAmount || finalAmount < 50) {
        showToast("Minimum donation amount is ₹50", "danger");
        return;
      }

      if (!donorName || !donorEmail) {
        showToast("Please provide your name and email for the tax receipt.", "danger");
        return;
      }

      // Generate receipt
      const receiptNo = `JD-REC-${Math.floor(100000 + Math.random() * 900000)}`;
      document.getElementById("receipt-number").textContent = receiptNo;
      document.getElementById("receipt-donor-name").textContent = donorName;
      document.getElementById("receipt-amount").textContent = `₹${finalAmount.toLocaleString("en-IN")}`;
      document.getElementById("receipt-date").textContent = new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
      });

      if (modal) modal.classList.add("active");
      showToast("Donation successful! Thank you for saving lives.", "success");
      donateForm.reset();
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }
}

/* --------------------------------------------------------------------------
   Page 8: Contact Page
   -------------------------------------------------------------------------- */
function initContactPage() {
  const contactForm = document.getElementById("contact-inquiry-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name").value.trim();
      if (!name) {
        showToast("Please provide your name.", "danger");
        return;
      }

      showToast(`Thank you, ${name}! Your message has been received. Our team will contact you shortly.`, "success");
      contactForm.reset();
    });
  }
}
