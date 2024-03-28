$(".slickSlider").slick({
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 1,
  prevArrow: $(".previousBtn"),
  nextArrow: $(".nextBtn"),
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});

$(".eventSlider").slick({
  slidesToShow: 1,
  arrows: false,
  infinite: true,
  dots: true,
  slidesToScroll: 1,
});
