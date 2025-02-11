// File: assets/theme.js
// Description: Handles store interactions like mobile menu toggle.

document.addEventListener('DOMContentLoaded', function() {
    console.log('Theme JS loaded successfully');
  
    // Select the mobile menu button and menu container
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-links');
  
    if (menuToggle && menu) {
      menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
      });
  
      // Close menu when clicking outside of it (optional UX improvement)
      document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
          menu.classList.remove('active'); // Ensure menu closes when clicking outside
        }
      });
    } else {
      console.warn('Menu toggle or menu element not found. Check your HTML structure.');
    }
  });
  