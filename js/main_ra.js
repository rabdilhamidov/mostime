$(function () {
  // Слайдер 
  var pages_len = $('.pager li.page').length;
  // валидация форм
  var regsObj = {
      EMAIL: /^[a-z0-9](?:[a-z0-9_\.-]*[a-z0-9])*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])*\.)+[a-z]{2,4}$/i,
      TEL: /^[0-9 \,\;\-\+\(\)\[\]]+$/i,
      EN_RU: /^[a-zA-Zа-яА-ЯёЁ _-]+$/i,
      EN_RU_D: /^[a-zA-Zа-яА-ЯёЁ0-9 _-]+$/i,
      ALL: /^[\s\S]+$/i
    };
  // Валидация формы Новое сообщение
  form_new_mess_handler = function (event) {
    var form_data = {
        who: $('input#who').val(),
        mess: $('textarea#mess').val()
      };
    var is_err = false;
    $('span.err').hide();
    if (!regsObj.EN_RU_D.test(form_data.who)) {
      $('input#who').next('span.err').show();
      is_err = true;
    }
    if (!regsObj.ALL.test(form_data.mess)) {
      $('textarea#mess').next('span.err').show();
      is_err = true;
    }
    if (is_err) {
      event.preventDefault();
    } else {
      $('.overlay').fadeOut(300);
      $('.popup#new-mess').fadeOut(300);
    }
  };
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
      $('.title li a').removeClass('active');
      $('.title li a').eq(current).addClass('active');
    }
  }).on('click', 'a.popup-close', function (event) {
    event.preventDefault();
    $('.overlay').fadeOut(300);
    $('.popup#new-mess').fadeOut(300);
  }).on('click', '#create-new-mess', function (event) {
    event.preventDefault();
    $('.overlay').fadeIn(300);
    $('.popup#new-mess').fadeIn(300);
  }).on('submit', 'form#new-mess', form_new_mess_handler);
});