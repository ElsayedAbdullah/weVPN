$(function(){$(".navbar .navbar-nav > li,.platform-content .platform-list li").on("click",function(){$(this).toggleClass("active").siblings().removeClass("active")}),$(".navbar .navbar-toggler").click(function(t){return t.detail&&1!=t.detail||($(".navbar").toggleClass("navbar-show-mobile"),$("body, html").toggleClass("overlay"),$(".navbar-collapse").toggleClass("show"),$(".navbar-toggler img:last-child").is(":hidden")?($(".navbar-toggler img").hide(),$(".navbar-toggler img:last-child").show()):($(".navbar-toggler img").hide(),$(".navbar-toggler img:first-child").show())),!1}),$(".dashboard-list li").on("click",function(){$(this).addClass("active").siblings().removeClass("active"),$(".list-content > div").hide(),$($(this).data("content")).fadeIn(),$(".payment-features").hide(),$(".upgrade-plan-content").hide(),$(".dashboard h2").text($(this).find("a").text())}),$(".categories-links .links li").on("click",function(){$(this).addClass("active").siblings().removeClass("active"),$(".articles-content > div").hide(),$($(this).data("content")).fadeIn()}),$(".security-cat").on("click",function(){$(".security-item").click()}),$(".privacy-cat").on("click",function(){$(".privacy-item").click()}),$(".how-to-cat").on("click",function(){$(".how-to-item").click()}),767<$(window).innerWidth()&&$(".share .icon").on("click",function(){$(this).siblings(".social-icons").toggle().end().next("span").toggle()}),$("body").on("click",function(t){var e=$(t.currentTarget);e.is(".navbar")||e.closest(".navbar").length||($("html,body").removeClass("overlay"),$(".navbar-collapse").removeClass("show"),$(".navbar").removeClass("navbar-show-mobile"),$(".navbar-toggler img").hide(),$(".navbar-toggler img:first-child").show())}),$(".navbar").on("click",function(t){t.stopPropagation()}),$(".testimonials-tabs li a").on("click",function(t){t.preventDefault(),$(this).parent("li").addClass("active").siblings("li").removeClass("active"),$(".testimonials-slider .slider").css({opacity:0,display:"none"}),$($(this).parent("li").data("content")).css({opacity:1,display:"block"})}),$(".list-internal li a").click(function(t){t.preventDefault(),$("html, body").animate({scrollTop:$($(this).data("scroll")).offset().top-40},1e3)}),$(".testim .testim-author h4").each(function(){var t=$(this).text().charAt(0);$(this).find(".first-letter").text(t)}),$(".payment--method .label-radio").on("click",function(){$(this).parents(".payment--method").next(".card-info").slideDown(),$(".card-info").not($(this).parents(".payment--method").next(".card-info")).slideUp()}),$(".list li .list-item-text .menu-btn").on("click",function(){$(".list li .cancel").fadeToggle(200)}),$(".list li .cancel").on("click",function(){$(this).fadeOut()}),$(".item-heading h3 .settings").on("click",function(){$("#subscription").click()}),$(".change-password-content form .input-password").keyup(function(){console.log("keyup");var t=$(this).val();t.length<8||20<t.length?$(".check-password ul #length").removeClass("valid").addClass("invalid"):$(".check-password ul #length").removeClass("invalid").addClass("valid"),t.match(/\d/)?$(".check-password ul #number").removeClass("invalid").addClass("valid"):$(".check-password ul #number").removeClass("valid").addClass("invalid"),t.match(/(?=.*?[~!@#$%^&()_+-=./{}<>?:"'])/)?$(".check-password ul #symbol").removeClass("invalid").addClass("valid"):$(".check-password ul #symbol").removeClass("valid").addClass("invalid")}),$(".change-password-content form .input-confirm-password").blur(function(){$(".input-password").val()!=$(".input-confirm-password").val()&&console.log("password not matched")}),$(".invoices .toggle:first").css("display","block"),$(".invoices .cell").on("click",function(){$(this).toggleClass("active").siblings().removeClass("active"),$(this).next(".toggle").slideToggle(),$(".toggle").not($(this).next(".toggle")).slideUp()}),$(".panel-country-header.has-cluster").on("click",function(){$(this).next(".has-clusters").slideToggle()}),$(".panel-country-header").on("click",function(){$(this).toggleClass("active").next(".panel-country-body").slideToggle()}),$(".panel-cluster-header").on("click",function(){$(this).toggleClass("active").next(".panel-cluster-body").slideToggle()}),$("tr.parent").on("click",function(){$(this).toggleClass("active").siblings(".child").slideToggle(100)}),$("#myInput").on("keyup",function(){var t=$(this).val().toLowerCase();$("#myTable1 tbody tr, #myTable2 tbody tr, #myTable3 tbody tr, #panel1 .panel-country-header, #panel2 .panel-country-header, #panel3 .panel-country-header").filter(function(){$(this).toggle(-1<$(this).text().toLowerCase().indexOf(t))})}),$("#myInput, #myInput2").on("keyup",function(){$("#myInput").val()||""!=$("#myInput2").val()?($(".search-btn").find(".search-icon").hide(),$(".search-btn").find(".close-icon").show()):($(".search-btn").find(".search-icon").show(),$(".search-btn").find(".close-icon").hide())}),$(".search-btn").on("click",function(t){t.preventDefault(),$(this).prev("input").val("").focus(),$(this).find(".search-icon").toggle(),$(this).find(".close-icon").toggle()}),$(".weplay-content .submit button").on("click",function(t){t.preventDefault(),$(this).parents(".weplay-content").hide(),$(".thanks-for-submission").show()}),$(".hero-img-content .arrow-down").click(function(){$("html, body").animate({scrollTop:$(".weplay-info").offset().top},1e3)}),$(".dropdown--menu").on("click",function(t){t.stopPropagation()}),$(".list li.android , .list li.mac-os").on({mouseenter:function(){$(".right-column").css("background-color","#f9f8f4")},mouseleave:function(){$(".right-column").css("background-color","#fff")}});var e=$("#inputfile"),n=e.prev("span"),o=n.html();e.on("change",function(){var t=e[0].files[0];""!=t?(n.html(t.name),n.css("color","#5b5863")):(n.html(o),n.css("color","#8d8b92"))}),$(".contact-us-content .input-email, .contact-us-content .subject, .contact-us-content .message").on("keyup",function(){$(this).val()?$(this).prev("label").css({color:"#8d8b92"}):$(this).prev("label").css({color:"#5b5863"})});var s=$(".contact-us-content .input-email");var a=!0,i=!0,l=!0;s.on("blur",function(){var t;t=s.val(),a=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(t)&&""!=s.val()?($(this).parent(".form-group").next(".custom-alert").fadeOut().end().css({border:"1px solid #e0ded5","box-shadow":"none"}),!1):($(this).parent(".form-group").next(".custom-alert").fadeIn().end().css({border:"1px solid #F04545","box-shadow":"inset 0px -3px 0px #F04545"}),!0)}),$("select.subject").on("blur",function(){i=0==$("select[name=subject]").val()?($("select.subject").parent(".form-group").next(".custom-alert").fadeIn().end().css({border:"1px solid #F04545","box-shadow":"inset 0px -3px 0px #F04545"}),!0):($("select.subject").parent(".form-group").next(".custom-alert").fadeOut().end().css({border:"1px solid #e0ded5","box-shadow":"none"}),!1)}),$("textarea.message").on("blur",function(){l=""==$(this).val()?($(this).parent(".form-group").next(".custom-alert").fadeIn().end().css({border:"1px solid #F04545","box-shadow":"inset 0px -3px 0px #F04545"}),!0):($(this).parent(".form-group").next(".custom-alert").fadeOut().end().css({border:"1px solid #e0ded5","box-shadow":"none"}),!1)}),$(".submit button").on("click",function(t){1==a||1==i||1==l?(t.preventDefault(),$("select.subject").blur(),$(s).blur(),$("textarea.message").blur()):($(".contact-us-content").hide(),$(".message-sent").show().delay(5e3))})});