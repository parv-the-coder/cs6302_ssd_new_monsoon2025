import { logPageView, logClickEvents } from '../Q6/script.js'; // adjust path as needed

// Attach listeners
window.addEventListener("load", logPageView);
document.addEventListener("click", logClickEvents);

// Main JS extracted from original single-file HTML
// File: script.js
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    // Header scroll effect
    const header = document.getElementById("header");
    const scrollToTopBtn = document.getElementById("scrollToTop");

    function onWindowScroll() {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
        scrollToTopBtn.classList.add("visible");
      } else {
        header.classList.remove("scrolled");
        scrollToTopBtn.classList.remove("visible");
      }
    }

    window.addEventListener("scroll", onWindowScroll);

    // Scroll to top functionality (button + keyboard)
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    scrollToTopBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollToTopBtn.click();
      }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          const headerHeight = document.querySelector(".header").offsetHeight;
          const targetPosition = target.offsetTop - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });

    // Theme toggle
    const themeToggleBtn = document.getElementById("themeToggle");
    const body = document.body;

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Toggle on click
    themeToggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDark = body.classList.contains("dark-mode");

      themeToggleBtn.innerHTML = isDark
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';

      // Save preference
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    // Active navigation link highlighting
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    function highlightActiveNavLink() {
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    }

    window.addEventListener("scroll", highlightActiveNavLink);
    // highlight on load (in case user landed with hash or scrolled)
    highlightActiveNavLink();

    // Real-time clock
    function startTime() {
      const today = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      };

      const clockEl = document.getElementById("txt");
      if (clockEl) {
        clockEl.innerHTML =
          "Current Time: " + today.toLocaleString("en-US", options);
      }
    }

    // run clock every 1s
    startTime();
    setInterval(startTime, 1000);

    // Animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
        }
      });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });

    // Mobile menu functionality (placeholder for future enhancement)
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", () => {
        // Toggle mobile menu - implement as needed
        console.log("Mobile menu clicked");
      });
    }

    // Add loading states for external links (improved: preserve original innerHTML)
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
      link.addEventListener("click", function (e) {
        const originalInnerHTML = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';

        setTimeout(() => {
          this.innerHTML = originalInnerHTML;
        }, 2000);
      });
    });

    // Table row interactions
    document.querySelectorAll(".modern-table tbody tr").forEach((row) => {
      row.addEventListener("mouseenter", function () {
        this.style.transform = "translateX(4px)";
      });

      row.addEventListener("mouseleave", function () {
        this.style.transform = "translateX(0)";
      });
    });

    // Progressive enhancement - add subtle animations (fade-in)
    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 100);
  });
})();
