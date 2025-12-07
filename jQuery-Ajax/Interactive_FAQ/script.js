$(document).ready(function() {
  // 1. Click on a question → toggle answer visibility.
  $('.faq dt').on('click', function() {
    $(this).next('dd').slideToggle(150);
  });

  // 2. Hover → change question color.
  $('.faq dt').hover(
    function(){ $(this).css('color', '#2a7ae2'); },
    function(){ $(this).css('color', ''); }
  );

  // 3. Double-click question → collapse all answers.
  $('.faq dt').on('dblclick', function() {
    $('.faq dd').slideUp(150);
  });

  // 4. Focus on answer input (if any) → highlight parent question.
  $('.answer-input').on('focus', function() {
    $(this).closest('dd').prev('dt').addClass('focused');
  });

  // 5. Blur from input → reset background color.
  $('.answer-input').on('blur', function() {
    $(this).closest('dd').prev('dt').removeClass('focused');
  });

  // accessibility: allow Enter to toggle when dt focused
  $('.faq dt').on('keypress', function(e){
    if (e.key === 'Enter' || e.keyCode === 13) $(this).click();
  });
});
