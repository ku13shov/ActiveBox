// fixed header

$(function() {
  let header = $("#header");
  let intro = $("#intro");
  let introH;
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function() {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    if(scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }

  });

  // smooth scroll

  $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    $("html, body").animate({
      scrollTop: elementOffset - 70
    }, 800);
  });

  // navToggle

  let nav = $("#nav");
  let navToggle = $("#navToggle");

  navToggle.on("click", function(event){
    event.preventDefault();

    nav.toggleClass("show");
  });

});