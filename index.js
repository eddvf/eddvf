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