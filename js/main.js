$(function() {
  // add class active on navbar link and remove from siblings
  $(
    ".navbar .navbar-nav li,.categories-links .links li,.platform-content .platform-list li"
  ).on("click", function() {
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

  // switch between tabs in live-product section
  $(".dashboard-list li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".list-content > div").hide();
    $($(this).data("content")).fadeIn();
    $(".payment-features").hide();
    $(".upgrade-plan-content").hide();
    $(".dashboard h2").text(
      $(this)
        .find("a")
        .text()
    );
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
    // responsiveClass: true,
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
      1024: {
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
    // responsiveClass: true,
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
      1024: {
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
    // responsiveClass: true,
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
      1024: {
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

  $(".list-internal li a").click(function(event) {
    event.preventDefault();
    // $(this).data("scroll");
    $("html, body").animate(
      {
        scrollTop: $($(this).data("scroll")).offset().top - 40
      },
      1000
    );
  });

  // get the first character of testimonial author

  $(".testim .testim-author h4").each(function() {
    var firstLetter = $(this)
      .text()
      .charAt(0);
    $(this)
      .find(".first-letter")
      .text(firstLetter);
  });

  // toggle between credit card and paypal
  // $(".credit-payment .pay-card").click(function() {
  //   $(this)
  //     .parent()
  //     .siblings(".card-info")
  //     .slideDown(500);
  // });
  // $(".paypal-payment .pay-card").click(function() {
  //   $(this)
  //     .parent()
  //     .siblings(".card-info")
  //     .slideUp(500);
  // });

  // when click menu button in subscription settings tab open cancel button
  $(".list li .list-item-text .menu-btn").on("click", function() {
    $(".list li .cancel").fadeToggle(200);
  });

  // hide Cancel Automatic Renewal button when click on it
  $(".list li .cancel").on("click", function() {
    $(this).fadeOut();
  });

  $(".item-heading h3 .settings").on("click", function() {
    $("#subscription").click();
  });

  // Checking the complexity rules
  $(".change-password-content form .input-password").keyup(function() {
    console.log("keyup");
    var pswd = $(this).val();
    //validate the length
    if (pswd.length < 8 || pswd.length > 20) {
      $(".check-password ul #length")
        .removeClass("valid")
        .addClass("invalid");
    } else {
      $(".check-password ul #length")
        .removeClass("invalid")
        .addClass("valid");
    }

    //validate number
    if (pswd.match(/\d/)) {
      $(".check-password ul #number")
        .removeClass("invalid")
        .addClass("valid");
    } else {
      $(".check-password ul #number")
        .removeClass("valid")
        .addClass("invalid");
    }

    //validate symbol
    if (pswd.match(/(?=.*?[~!@#$%^&()_+-=./{}<>?:"'])/)) {
      $(".check-password ul #symbol")
        .removeClass("invalid")
        .addClass("valid");
    } else {
      $(".check-password ul #symbol")
        .removeClass("valid")
        .addClass("invalid");
    }
  });

  $(".change-password-content form .input-confirm-password").blur(function() {
    if ($(".input-password").val() != $(".input-confirm-password").val()) {
      console.log("password not matched");
    }
  });

  // open dropdown menu in invoices in mobile screen
  $(".invoices .toggle:first").css("display", "block");

  $(".invoices .cell").on("click", function() {
    $(this)
      .toggleClass("active")
      .siblings()
      .removeClass("active");
    $(this)
      .next(".toggle")
      .slideToggle();

    $(".toggle")
      .not($(this).next(".toggle"))
      .slideUp();
  });

  //---------------------------------------

  // detect the operating system

  // var OSName = "Unknown";
  // if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1)
  //   OSName = "Windows 10";
  // if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1)
  //   OSName = "Windows 8";
  // if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1)
  //   OSName = "Windows 7";
  // if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1)
  //   OSName = "Windows Vista";
  // if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1)
  //   OSName = "Windows XP";
  // if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1)
  //   OSName = "Windows 2000";
  // if (window.navigator.userAgent.indexOf("Mac") != -1) OSName = "Mac/iOS";
  // if (window.navigator.userAgent.indexOf("X11") != -1) OSName = "UNIX";
  // if (window.navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";

  // console.log(OSName);

  //------------------------------

  // to detect the browser

  // var browser = (function() {
  //   var test = function(regexp) {
  //     return regexp.test(window.navigator.userAgent);
  //   };
  //   switch (true) {
  //     case test(/edge/i):
  //       return "edge";
  //     case test(/opr/i) && (!!window.opr || !!window.opera):
  //       return "opera";
  //     case test(/chrome/i) && !!window.chrome:
  //       return "chrome";
  //     case test(/trident/i):
  //       return "ie";
  //     case test(/firefox/i):
  //       return "firefox";
  //     case test(/safari/i):
  //       return "safari";
  //     default:
  //       return "other";
  //   }
  // })();
  // console.log(browser);
});
