$(function(){
  $("a#scrollTop").click(function(){
      var speed = 1200;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == ""?"html" : href);
      var position = target.offset().top;

      $("body, html").animate({scrollTop:position}, speed, "swing");
      return false;
  });
});

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  autoplay: {delay: 3000},
  speed: 2000,
  effect: 'fade',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});