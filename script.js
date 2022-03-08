$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    dots: true,
    autoplay: false,
    pagination: true,
    autoplayTimeout: 4000,
    startPosition: 0,
    responsiveClass: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // accordion funnction to change + / -
  $(".card .card-header").click(function () {
    $(this).find("span").toggleClass("fa-plus fa-minus");
    $(".card-header").not($(this)).find("span").removeClass("fa-minus");
    $(".card-header").not($(this)).find("span").addClass("fa-plus");
  });
});
