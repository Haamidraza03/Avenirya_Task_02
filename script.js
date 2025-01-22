const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) { // Show the button after scrolling 200px
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to the top smoothly when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
