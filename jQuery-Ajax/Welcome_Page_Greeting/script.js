$(document).ready(function() {
  // Function to produce greeting based on hour
  function timeGreeting() {
    const now = new Date();
    const h = now.getHours();
    if (h < 12) return "Good Morning!";
    if (h < 17) return "Good Afternoon!";
    return "Good Evening!";
  }

  // 1. On page load → display personalized greeting
  $('#greeting').text(timeGreeting());

  // 4. Show an alert when greeting is clicked
  $('#greeting').on('click keypress', function(e){
    // support keyboard activation (Enter key)
    if (e.type === 'click' || (e.type === 'keypress' && (e.key === 'Enter' || e.keyCode === 13))) {
      alert('Greeting clicked: ' + $(this).text());
    }
  });

  // 2. Button “Change Greeting” → changes text to a motivational quote.
  $('#change-greet').on('click', function() {
    const quotes = [
      "Believe you can and you're halfway there.",
      "Small steps every day.",
      "Progress over perfection.",
      "You are capable of amazing things.",
      "Stay curious, keep learning."
    ];
    const q = quotes[Math.floor(Math.random()*quotes.length)];
    $('#greeting').text(q);
    // change sub message
    $('#sub-msg').text("Motivation unlocked ✨");
  });

  // 3. Toggle visibility of a welcome message using another button.
  $('#toggle-welcome').on('click', function() {
    $('#sub-msg').toggleClass('hidden');
  });

  // Reset button for convenience
  $('#reset-greet').on('click', function() {
    $('#greeting').text(timeGreeting());
    $('#sub-msg').removeClass('hidden').text("We're glad you're here.");
  });
});
