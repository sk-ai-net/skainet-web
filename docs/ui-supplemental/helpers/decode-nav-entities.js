// Fix HTML entity encoding in navigation links
(function() {
  // Only run in browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }
  
  function decodeNavEntities() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      // Replace HTML entities with proper characters
      link.innerHTML = link.innerHTML
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'");
    });
  }

  // Run after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', decodeNavEntities);
  } else {
    decodeNavEntities();
  }
})();