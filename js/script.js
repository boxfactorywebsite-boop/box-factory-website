// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Chat button placeholder - connect to a third-party chatbot later
  var chatFloat = document.getElementById('chatFloat');
  if (chatFloat) {
    chatFloat.addEventListener('click', function () {
      alert('Chat support is coming soon. Please use WhatsApp or the quote form to reach us.');
    });
  }
});
