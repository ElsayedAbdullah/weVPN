$(function() {
  $(".testimonials-tabs li a").on("click", function(e) {
    e.preventDefault();

    $(this)
      .parent("li")
      .addClass("active")
      .siblings("li")
      .removeClass("active");
  });
  // trigger owl carousel
  $("#our-testimonial-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 50,
    responsive: {
      0: {
        items: 1.24,
        dotsEach: true,
        dots: true,
        margin: 20
      },
      600: {
        items: 3,
        margin: 30
      },
      1100: {
        items: 3.8
      }
    },
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',

      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
  });
});
