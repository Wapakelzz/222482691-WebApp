<script>
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link = {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      })
    });
  </script>