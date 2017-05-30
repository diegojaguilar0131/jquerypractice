$(document).ready(function() {
  $(".walrusclick").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
  $(".walrusclick2").click(function() {
    $("#test-showing").slideToggle();
    $("#test-hidden").slideToggle();
  });
});
