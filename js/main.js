$(function() {
  // add class active on navbar link and remove from siblings
  $(".navbar .navbar-nav li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  // when click on the menu button it open the menu links
  $(".navbar .navbar-toggler").click(function(event) {
    if (!event.detail || event.detail == 1) {
      //activate on first click only to avoid hiding again on double clicks
      $(".navbar").toggleClass("navbar-show-mobile");
      $("body, html").toggleClass("overlay");
      $(".navbar-collapse").toggleClass("show");
      if ($(".navbar-toggler img:last-child").is(":hidden")) {
        $(".navbar-toggler img").hide();
        $(".navbar-toggler img:last-child").show();
      } else {
        $(".navbar-toggler img").hide();
        $(".navbar-toggler img:first-child").show();
      }
    }
    return false;
  });

  // when click in anywhere in document close the navbar menu and clear the overlay from the body
  $("body").on("click", function(e) {
    var $currEl = $(e.currentTarget);
    if (!$currEl.is(".navbar") && !$currEl.closest(".navbar").length) {
      $("html,body").removeClass("overlay");
      $(".navbar-collapse").removeClass("show");
      $(".navbar").removeClass("navbar-show-mobile");
      $(".navbar-toggler img").hide();
      $(".navbar-toggler img:first-child").show();
    }
  });
  // stop propagation (closing navbar when click inside it) when click on navbar when the menu open in mobile screen
  $(".navbar").on("click", function(e) {
    e.stopPropagation();
  });

  // trigger owl carousel one
  $("#our-testimonial-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsiveClass: true,
    margin: 50,
    responsive: {
      0: {
        items: 1.25,
        margin: 20
      },
      768: {
        items: 1.5,
        margin: 30
      },
      850: {
        items: 2,
        margin: 30
      },
      1200: {
        items: 3.8
      }
    },
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',

      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
  });

  // trigger owl carousel two
  $("#our-testimonial-slider2").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsiveClass: true,
    margin: 50,
    responsive: {
      0: {
        items: 1.26,
        margin: 20
      },
      768: {
        items: 1.5,
        margin: 30
      },
      850: {
        items: 2,
        margin: 30
      },
      1200: {
        items: 3.8
      }
    },
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',

      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
  });

  // trigger owl carousel three
  $("#our-testimonial-slider3").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsiveClass: true,
    margin: 50,
    responsive: {
      0: {
        items: 1.26,
        margin: 20
      },
      768: {
        items: 1.5,
        margin: 30
      },
      850: {
        items: 2,
        margin: 30
      },
      1200: {
        items: 3.8
      }
    },
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',

      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
  });

  // switch between the slider
  $(".testimonials-tabs li a").on("click", function(e) {
    e.preventDefault();

    $(this)
      .parent("li")
      .addClass("active")
      .siblings("li")
      .removeClass("active");

    $(".testimonials-slider .slider").css({
      opacity: 0,
      display: "none"
    });
    $(
      $(this)
        .parent("li")
        .data("content")
    ).css({
      opacity: 1,
      display: "block"
    });
  });
});
