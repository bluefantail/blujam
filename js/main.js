// Initialise Smooth Scroll and Gumshoe for Navigation
smoothScroll.init({
    speed: 560, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: -1, // Integer. How far to offset the scrolling anchor location in pixels
    updateURL: true, // Boolean. If true, update the URL hash on scroll
});
gumshoe.init();