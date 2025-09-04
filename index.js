document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve the element after it becomes visible
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Target elements with specific animation classes
  const elements = document.querySelectorAll(
    '.animate-on-scroll, .hero-content, .about-content, .projects-grid, .contact-content, .timeline, .footer-content, .project-card, .stat-item, .skill-item, .timeline-item, .contact-item'
  );

  elements.forEach(element => {
    observer.observe(element);
  });

  // Handle back-to-top button visibility
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
  }
});
