var contactForm = document.querySelector('#contact-form');

function handle_contact(event){
  event.stopPropagation();
  event.preventDefault();

  // Only jquery dep
  $.ajax({
      // url: "//formspree.io/mattfannin@acidic.co.nz",
      url: "//formspree.io/joshua.scott.132@gmail.com",
      method: "POST",
      data: $('#contact-form').serialize(),
      dataType: "json"
  });

  document.querySelector('#contact').insertAdjacentHTML('beforeend', '<div id="contact-message"><div>Thanks! A human will get back to you shortly.</div></div>')
}

document.querySelector('#contact-form').addEventListener('submit', handle_contact);

// Disable Hover events on mobile devices
if ('createTouch' in document) {
  try {
    var ignore = /:hover\b/;
    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      for (var j = sheet.cssRules.length - 1; j >= 0; j--) {
        var rule = sheet.cssRules[j];
        if (rule.type === CSSRule.STYLE_RULE && ignore.test(rule.selectorText)) {
          sheet.deleteRule(j);
        }
      }
    }
  } catch (e) {}
}

// Initialise Smooth Scroll and Gumshoe for Navigation
smoothScroll.init({
  speed: 560, // Integer. How fast to complete the scroll in milliseconds
  easing: 'easeInOutCubic', // Easing pattern to use
  updateURL: true, // Boolean. If true, update the URL hash on scroll
});
gumshoe.init({
  offset: 1, // Integer. How far to offset the scrolling anchor location in pixels
});
