$(function () {
  // Слайдер программ
  var slider_programs = $('ul.bxslider').bxSlider({
      pager: false,
      controls: false
    });
  var len = slider_programs.getSlideCount();
  /*
  */
  $(document).ready(function () {
  }).on('click', '.slider-arrows a', function (event) {
    event.preventDefault();
    $(this).hasClass('prev') && slider_programs.goToPrevSlide();
    $(this).hasClass('next') && slider_programs.goToNextSlide();
    var current = slider_programs.getCurrentSlide();
    $('.title li a').removeClass('active');
    $('.title li a').eq(current).addClass('active');
    $('.pager li.page').removeClass('active');
    $('.pager li.page').eq(current).addClass('active');
  }).on('click', '.title li a', function (event) {
    event.preventDefault();
    var indx = $('.title li a').index($(this));
    slider_programs.goToSlide(indx);
    $('.title li a').removeClass('active');
    $(this).addClass('active');
    $('.pager li.page').removeClass('active');
    $('.pager li.page').eq(indx).addClass('active');
  }).on('click', '.pager li', function (event) {
    event.preventDefault();
    var indx = $('.pager li').index($(this));
    $('.pager li').removeClass('active');
    if (indx > 1 && indx < len + 2) {
      indx = indx - 2;
      slider_programs.goToSlide(indx);
    }
    if (indx == 0) {
      slider_programs.goToSlide(0);
    }
    if (indx == 1) {
      slider_programs.goToPrevSlide();
    }
    if (indx == len + 2) {
      slider_programs.goToNextSlide();
    }
    if (indx == len + 3) {
      slider_programs.goToSlide(len - 1);
    }
    var current = slider_programs.getCurrentSlide();
    $('.pager li.page').eq(current).addClass('active');
    $('.title li a').removeClass('active');
    $('.title li a').eq(current).addClass('active');
  });
});