(() => {
  $(".sec-01__slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,
   nav: false,
   // autoplay: true,
   // autoplayTimeout: 5000,
   animateOut: "fadeOut",
   animateIn: "fadeIn",
   mouseDrag: false,
   dot: true,

    autoHeight : false,

    margin : 5
  });
})();

(() => {
  $(".sec-06__slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,
   nav: false,
   dot: true,

    autoHeight : false,

    margin : 5
  });
})();

(() => {
  $(".sec-10__slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,
   nav: false,
   dot: true,

    autoHeight : false,

    margin : 5
  });
})();

(() => {
  $(".sec-12__slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,
   nav: true,
   navText: ["<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z'/></svg>", "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z'/></svg>"],
   dot: false,

    autoHeight : false,

    margin : 5
  });
  $('.owl-nav').append('<div class="sec-12__count-container"><span class="active-count">1</span> / <span>3</span></div>');

  $(".sec-12__slider").on('changed.owl.carousel', function (event) {
      let index = event.item.index;

      if (index == 2) {
        $('.active-count').text('1');
      } else if (index == 3) {
        $('.active-count').text('2');
      } else if (index == 4) {
        $('.active-count').text('3');
      } else if (index == 5) {
        $('.active-count').text('1');
      }
    });

  let owlNext = $('.sec-12 .owl-nav .owl-next');
  let owlPrev = $('.sec-12 .owl-nav .owl-prev');
  let index = 1;

  owlNext.on('click', function (event) {
      index++;
      if (index > 3) {
        $('.active-count').text((index - 3));
        index = 1;
      } else {
        $('.active-count').text(index);
      }
  });

  owlPrev.on('click', function (event) {
      index--;
      if (index == 0) {
        $('.active-count').text((index + 3));
        index = 3;
      } else {
        $('.active-count').text(index);
      }
  });
})();
