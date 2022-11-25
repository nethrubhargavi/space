// $(window).on("load", function() {
//   $(".loading").delay(1800).fadeOut();
// });


$(".appears-later").hide();
$(".appears-later").hide(0).delay(300).fadeIn();


$("#main-heading").hide();
$("#main-heading").hide(0).delay(300).fadeIn();


$(".options").hide();
$(".options").hide(0).delay(300).fadeIn();


$("#carousels").hide();
$("#carousels").hide(0).delay(300).fadeIn();


$(".information").hide();


$(document).ready(function() {
  $("#sc").click(function() {
    $(".heading").fadeOut();
    $(".spaceport").fadeOut();
    $(".launch-vehicle").fadeOut();
  });
  $("#sc").click(function() {
    $(".space-capsule").fadeIn();
  });
});


$(document).ready(function() {
  $("#sp").click(function() {
    $(".heading").fadeOut();
    $(".space-capsule").fadeOut();
    $(".launch-vehicle").fadeOut();
  });
  $("#sp").click(function() {
    $(".spaceport").fadeIn();
  });
});


$(document).ready(function() {
  $("#lv").click(function() {
    $(".heading").fadeOut();
    $(".space-capsule").fadeOut();
    $(".spaceport").fadeOut();
  });
  $("#lv").click(function() {
    $(".launch-vehicle").fadeIn();
  });
});
