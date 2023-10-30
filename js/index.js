$(function () {
  setupSwiper();

  $(".root-menu-item").hover(function () {
    if ($(this).children(".root-sub-menu-container").length == 0) {
      // 서브메뉴가 없으면 블러처리 안함
      return;
    }
    $(".main-container, .footer-container").addClass("blurred");
  }, function () {
    $(".main-container, .footer-container").removeClass("blurred");
  })
});

function setupSwiper() {
  const featuredShoeSlidesSwiper = new Swiper('.featured-shoe-slides', {
    direction: 'horizontal',
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: 3,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
  $(".featured-shoe-slide-control-button-prev").addClass("disabled");
  $(".featured-shoe-slide-control-button-prev").click(function () {
    featuredShoeSlidesSwiper.slidePrev();
    $(".featured-shoe-slide-control-button").removeClass("disabled");
    if (featuredShoeSlidesSwiper.isBeginning) {
      $(this).addClass("disabled");
    }
  });
  $(".featured-shoe-slide-control-button-next").click(function () {
    featuredShoeSlidesSwiper.slideNext();
    $(".featured-shoe-slide-control-button").removeClass("disabled");
    if (featuredShoeSlidesSwiper.isEnd) {
      $(this).addClass("disabled");
    }
  });

  const productSlidesSwiper = new Swiper('.product-slides', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    spaceBetween: 16,
    slidesPerView: 3,
  });
  $(".product-slides").each(function (n, swiperElem) {
    const slideCount = $(swiperElem).find(".swiper-slide").length;
    const firstItemIndex = 3;

    $(swiperElem).find(".swiper-slide").each(function (m, sipwerSlideElem) {
      let itemIndex;
      if (m < firstItemIndex) {
        itemIndex = slideCount - (firstItemIndex - m) + 1;
      } else {
        itemIndex = m - firstItemIndex + 1;
      }
      $(this).find(".slide-page-indicator").text(`${itemIndex}/${slideCount}`);
    });
  });
}
