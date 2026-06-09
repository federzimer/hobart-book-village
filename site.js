/* ============================================================
   site.js  —  shared navigation, footer, and page interactions
   ------------------------------------------------------------
   Every page loads this file. It builds the top nav bar and the
   footer so they only have to be edited in ONE place.

   Each page controls two things via <body> attributes:
     data-page   = "home"  -> nav is transparent over the hero,
                              turns solid on scroll
                   "inner" -> nav is solid from the top
     data-active = which nav link to highlight
                   ("bookshops" | "plan" | "events" | "around")
   ============================================================ */

(function () {
  "use strict";

  // ---- Nav links (edit here to change the menu everywhere) ----
  var NAV_LINKS = [
    { key: "bookshops", label: "Bookshops",       href: "index.html#bookstores" },
    { key: "plan",      label: "Plan Your Visit",  href: "plan.html" },
    { key: "events",    label: "Events",           href: "events.html" },
    { key: "around",    label: "Around Hobart",    href: "around-hobart.html" }
  ];

  var page   = document.body.dataset.page   || "inner";
  var active = document.body.dataset.active || "";
  var isHome = page === "home";

  // ---------------------------- NAV ----------------------------
  var nav = document.createElement("nav");
  nav.id = "navbar";
  nav.className = isHome ? "transparent" : "scrolled solid";

  var linksHtml = NAV_LINKS.map(function (l) {
    var cls = l.key === active ? ' class="active"' : "";
    return '<li><a' + cls + ' href="' + l.href + '">' + l.label + "</a></li>";
  }).join("");

  nav.innerHTML =
    '<div class="nav-inner">' +
      '<a href="index.html" class="nav-logo">' +
        '<img src="logo-v2.png" alt="Hobart Book Village" class="nav-logo-img">' +
        "Hobart Book Village" +
      "</a>" +
      '<ul class="nav-links" id="navLinks">' +
        linksHtml +
        '<li><a href="plan.html" class="nav-cta">Plan Your Trip</a></li>' +
      "</ul>" +
      '<button class="mobile-toggle" id="mobileToggle" aria-label="Menu">' +
        "<span></span><span></span><span></span>" +
      "</button>" +
    "</div>";

  document.body.insertBefore(nav, document.body.firstChild);
  if (!isHome) document.body.classList.add("has-solid-nav");

  // -------------------------- FOOTER ---------------------------
  var footer = document.createElement("footer");
  footer.innerHTML =
    '<div class="footer-grid">' +
      '<div class="footer-brand">' +
        '<div class="footer-brand-logo">' +
          '<img src="logo-v2.png" alt="Hobart Book Village">' +
          "<h3>Hobart Book Village</h3>" +
        "</div>" +
        "<p>The only Book Village east of the Mississippi &mdash; eight independent bookshops in the Northern Catskills, where a quiet Main Street became a destination for readers.</p>" +
      "</div>" +
      '<div class="footer-col"><h4>Explore</h4><ul>' +
        '<li><a href="index.html#bookstores">Bookshops</a></li>' +
        '<li><a href="index.html#around">Around the Village</a></li>' +
        '<li><a href="events.html">Events</a></li>' +
        '<li><a href="around-hobart.html">Around Hobart</a></li>' +
      "</ul></div>" +
      '<div class="footer-col"><h4>Plan Your Visit</h4><ul>' +
        '<li><a href="plan.html#visit">Getting Here</a></li>' +
        '<li><a href="plan.html#stay">Stay &amp; Dine</a></li>' +
        '<li><a href="plan.html#itineraries">Itineraries</a></li>' +
        '<li><a href="https://www.bookvillageinn.com/" target="_blank" rel="noopener">Book a Room</a></li>' +
      "</ul></div>" +
      '<div class="footer-col"><h4>Connect</h4><ul>' +
        '<li><a href="https://www.instagram.com/hobartbookvillageny/" target="_blank" rel="noopener">Instagram</a></li>' +
        '<li><a href="https://www.facebook.com/hobartbookvillage" target="_blank" rel="noopener">Facebook</a></li>' +
        '<li><a href="https://www.tiktok.com/discover/hobart-book-village" target="_blank" rel="noopener">TikTok</a></li>' +
        '<li><a href="http://www.hobartbookvillage.com/" target="_blank" rel="noopener">Official Site</a></li>' +
      "</ul></div>" +
    "</div>" +
    '<div class="footer-bottom">' +
      "<span>&copy; 2026 Hobart Book Village. Hobart, NY 13788.</span>" +
      '<div class="footer-social">' +
        '<a href="https://www.instagram.com/hobartbookvillageny/" target="_blank" rel="noopener">Instagram</a>' +
        '<a href="https://www.facebook.com/hobartbookvillage" target="_blank" rel="noopener">Facebook</a>' +
        '<a href="https://www.tiktok.com/discover/hobart-book-village" target="_blank" rel="noopener">TikTok</a>' +
      "</div>" +
    "</div>";
  document.body.appendChild(footer);

  // ----------------------- INTERACTIONS ------------------------
  // Solid nav on scroll (home only — inner pages stay solid).
  if (isHome) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 80) {
        nav.classList.remove("transparent");
        nav.classList.add("scrolled");
      } else {
        nav.classList.add("transparent");
        nav.classList.remove("scrolled");
      }
    });
  }

  // Mobile menu toggle.
  var toggle = document.getElementById("mobileToggle");
  var navLinks = document.getElementById("navLinks");
  toggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });

  // Reveal-on-scroll for any element with class "fade-up".
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
  document.querySelectorAll(".fade-up").forEach(function (el) {
    observer.observe(el);
  });

  // Smooth-scroll for same-page anchor links (e.g. #bookstores).
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        navLinks.classList.remove("open");
      }
    });
  });
})();
