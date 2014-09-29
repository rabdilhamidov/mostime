$(function () {
  // Слайдер 
  var pages_len = $('.pager li.page').length;
  /*
  */
  $(document).ready(function () {
  }).on('click', 'a.load-file', function (event) {
    event.preventDefault();
    $(this).next().click();
  }).on('change', 'a.load-file + input[type=file]', function (event) {
    $(this).next('span.loaded-file').text($(this).val());
    $('a.load-file').text('\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u0444\u0430\u0439\u043b');
  });
});
function validate() {
  var regsObj = {
      TEL: /^[0-9 \,\;\-\+\(\)\[\]]+$/i,
      EN_RU_D: /^[a-zA-Zа-яА-ЯёЁ0-9 _-]+$/i
    };
  var is_err = false;
  $('span.err').hide();
  if (!regsObj.EN_RU_D.test(form_data.name)) {
    $(name_el).next('span.err').show();
    is_err = true;
  }
  if (!regsObj.TEL.test(form_data.phone)) {
    $(phone_el).next('span.err').show();
    is_err = true;
  }
  return is_err;
}