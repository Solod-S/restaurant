$(function () {
  $('.gallery__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          speed: 1000,
          // centerMode: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          fade: false,
          autoplay: true,
          autoplaySpeed: 1000,
          speed: 1000,

          vertical: true,

          verticalSwiping: true,
          arrows: false,
          // centerMode: true,
        },
      },
    ],
  });
});

// $(document).ready(function () {
//   $('.your-class').slick({
//     setting-name: setting-value
//   });
// });
