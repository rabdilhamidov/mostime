$(function () {
  // Слайдер 
  // Положение управляющих стрелок
  if ($('ul').is('.bxslider')) {
    var slider_h;
    if ($('div').is('.participants')) {
      slider_h = $('.participants').height();
    }
    if ($('div').is('.content-slider')) {
      slider_h = $('.content-slider').height();
    }
    var slider_arr_h = $('.slider-arrows').height();
    $('.slider-arrows').css({ 'margin-top': slider_h * 0.5 - slider_arr_h * 0.5 + 8 });
  }
  var pages_len = $('.pager li.page').length;
  /*
  ***
  */
  $(document).ready(function () {
  }).on('click', 'a.load-file', function (event) {
    event.preventDefault();
    $(this).next().click();
  }).on('change', 'a.load-file + input[type=file]', function (event) {
    $(this).next('span.loaded-file').text($(this).val());
    $('a.load-file').text('\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u0444\u0430\u0439\u043b');
  }).on('click', '.slider-arrows a', function (event) {
    // alert($('.content-slider').height());
    event.preventDefault();
    $(this).hasClass('prev') && frame_slider.goToPrevSlide();
    $(this).hasClass('next') && frame_slider.goToNextSlide();
    var current = frame_slider.getCurrentSlide();
    $('.pager li.page').removeClass('active');
    $('.pager li.page').eq(current).addClass('active');
  }).on('click', '.pager li', function (event) {
    if ($('ul').is('.bxslider')) {
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
    }
  }).on('click', 'a.popup-close', function (event) {
    event.preventDefault();
    $('.overlay').fadeOut(300);
    $('.frame-popup').fadeOut(300);
  }).on('click', '.afisha-detail', function (event) {
    event.preventDefault();
    $('.overlay').fadeIn(300);
    $('.frame-popup#afisha-detail').fadeIn(300);
    var content = $(this).parent().find('.detail-content').html();
    $('.popup-content').html('');
    $('.popup-content').append(content);
  }).on('click', '.person-photo', function (event) {
    event.preventDefault();
    var content = $(this).parent().find('.detail-content').html();
    if (content) {
      $('.overlay').fadeIn(300);
      $('.frame-popup#person-detail').fadeIn(300);
      $('.popup-content').html('');
      $('.popup-content').append(content);
    }
  });
  ;
});