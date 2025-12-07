$(document).ready(function() {
  // 1. Click on a product → highlight background.
  $('.product').on('click', function(e){
    // Prevent clicking favorite button from toggling highlight
    if ($(e.target).closest('.favorite').length) return;
    $('.product').removeClass('highlight');
    $(this).addClass('highlight');
  });

  // 2. Hover over a product → show additional product details.
  $('.product').hover(
    function(){ $(this).find('.details').slideDown(150); },
    function(){ $(this).find('.details').slideUp(150); }
  );

  // 3. Clicking a “Favorite” icon → toggles a “selected” class.
  $('.favorite').on('click', function(e){
    e.stopPropagation(); // prevent parent click
    $(this).toggleClass('selected');
    $(this).text($(this).hasClass('selected') ? '♥' : '♡');
  });

  // 4. Apply different styles to products with discounts using attribute selector.
  // Select products with data-discount > 0
  $('.product[data-discount]').each(function(){
    const disc = parseInt($(this).attr('data-discount'), 10);
    if (disc > 0) $(this).addClass('discount');
  });

  // 5. Show an alert if a product is out of stock (using data attribute).
  $('.product').on('dblclick', function(){
    const stock = $(this).attr('data-stock');
    if (stock === 'out') {
      alert('Sorry — this product is out of stock.');
    } else {
      alert('This product is available.');
    }
  });
});
