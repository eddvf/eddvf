document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const brandLogo = document.querySelector('.brand-logo');
    
    // Function to adjust brand logo text based on screen width
    function adjustBrandLogoText() {
        if (window.innerWidth <= 600) {
            // Shorter text for smaller screens
            brandLogo.innerHTML = '@EV:~$ <span class="blinking-cursor"> | </span>';
        } else {
            // Full text for larger screens
            brandLogo.innerHTML = '@Endrit_Vorfaj:~$ <span class="blinking-cursor"> | </span>';
        }
    }

    // Initial adjustment on page load
    adjustBrandLogoText();

    // Adjust the text on window resize events
    window.addEventListener('resize', adjustBrandLogoText);
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// Add typewriter effect to header
const headerText = "@Endrit_Vorfaj:~$ ";
let currentChar = 0;
const brandLogo = document.querySelector('.brand-logo');

function typeWriter() {
  if (currentChar < headerText.length) {
    brandLogo.innerHTML = headerText.substring(0, currentChar + 1) + '<span class="blinking-cursor">|</span>';
    currentChar++;
    setTimeout(typeWriter, 100);
  }
}

// Start the typewriter effect after page load
window.addEventListener('load', () => {
  brandLogo.innerHTML = '';
  typeWriter();
});



// Back to top button
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  
  document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });