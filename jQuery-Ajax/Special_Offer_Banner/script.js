$(document).ready(function() {
  // 1. “Hide” button → hide specific banners (hide all for example)
  $('#hide').on('click', function() {
    $('#banners .banner').hide();
  });

  // 2. “Show” button → show hidden banners.
  $('#show').on('click', function() {
    $('#banners .banner').show();
  });

  // 3. “Slide Up/Down” buttons → toggle banners.
  $('#slide-toggle').on('click', function() {
    $('#banners .banner').slideToggle(300);
  });

  // 4. “Fade In/Fade Out” → toggle gradually.
  $('#fade-toggle').on('click', function() {
    $('#banners .banner').fadeToggle(300);
  });

  // 5. Automatically rotate through banners every 5 seconds using fadeIn/fadeOut.
  const banners = $('#banners .banner');
  let idx = 0;
  banners.hide(); // start hidden
  banners.eq(idx).show();

  setInterval(function() {
    banners.eq(idx).fadeOut(500, function() {
      idx = (idx + 1) % banners.length;
      banners.eq(idx).fadeIn(500);
    });
  }, 5000);
});
