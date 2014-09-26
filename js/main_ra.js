$(function () {
  // Слайдер 
  // var len = frame_slider.getSlideCount();
  var pages_len = $('.pager li.page').length;
  /*
  */
  $(document).ready(function () {
  }).on('click', '.slider-arrows a', function (event) {
    event.preventDefault();
    $(this).hasClass('prev') && frame_slider.goToPrevSlide();
    $(this).hasClass('next') && frame_slider.goToNextSlide();
    var current = frame_slider.getCurrentSlide();
    $('.title li a').removeClass('active');
    $('.title li a').eq(current).addClass('active');
    $('.pager li.page').removeClass('active');
    $('.pager li.page').eq(current).addClass('active');
  }).on('click', '.title li a', function (event) {
    event.preventDefault();
    var indx = $('.title li a').index($(this));
    frame_slider.goToSlide(indx);
    $('.title li a').removeClass('active');
    $(this).addClass('active');
    $('.pager li.page').removeClass('active');
    $('.pager li.page').eq(indx).addClass('active');
  }).on('click', '.pager li', function (event) {
    event.preventDefault();
    var indx = $('.pager li').index($(this));
    $('.pager li').removeClass('active');
    if (indx > 1 && indx < pages_len + 2) {
      indx = indx - 2;
      frame_slider.goToSlide(indx);
    }
    if (indx == 0) {
      frame_slider.goToSlide(0);
    }
    if (indx == 1) {
      frame_slider.goToPrevSlide();
    }
    if (indx == pages_len + 2) {
      frame_slider.goToNextSlide();
    }
    if (indx == pages_len + 3) {
      frame_slider.goToSlide(pages_len - 1);
    }
    var current = frame_slider.getCurrentSlide();
    $('.pager li.page').eq(current).addClass('active');
    $('.title li a').removeClass('active');
    $('.title li a').eq(current).addClass('active');
  });
});