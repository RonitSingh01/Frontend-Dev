
$(document).ready(function(){
  // 1. Click a manager → highlight all direct reports.
  $('.manager').on('click', function() {
    const managerId = $(this).attr('data-id');
    // clear previous highlights
    $('.member').removeClass('highlight');
    // select direct reports using data-manager attribute
    $('[data-manager="' + managerId + '"]').addClass('highlight');
  });

  // 2. Hover on an employee → show contact info using .next() (we placed contact inside manager for demo)
  $('.member').hover(
    function(){ $(this).find('.contact').first().show(); },
    function(){ $(this).find('.contact').first().hide(); }
  );

  // 3. Click on a department → change background of all members in that department using .children()
  $('.dept-title').on('click', function(){
    const deptSection = $(this).closest('.dept');
    // toggle background of all member children
    deptSection.find('.member').toggleClass('highlight');
  });

  // 4. Select a random employee → highlight sibling employees.
  $('#random-employee').on('click', function(){
    const all = $('.dept .member').not('.manager');
    const picked = all.eq(Math.floor(Math.random() * all.length));
    // highlight siblings (same parent .reports)
    const siblings = picked.siblings('.member');
    // clear previous
    $('.member').removeClass('highlight');
    picked.addClass('highlight');
    siblings.addClass('highlight');
  });

  // 5. Collapse/expand team using .parent() and .find()
  let collapsed = false;
  $('#collapse-team').on('click', function(){
    if (!collapsed) {
      // collapse: find all reports and hide
      $('.manager').each(function(){
        $(this).find('.reports').slideUp(200);
      });
      collapsed = true;
      $(this).text('Expand Teams');
    } else {
      $('.manager').each(function(){
        $(this).find('.reports').slideDown(200);
      });
      collapsed = false;
      $(this).text('Collapse Teams');
    }
  });
});
