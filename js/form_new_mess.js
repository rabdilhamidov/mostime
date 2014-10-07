$(function () {
  /*
  */
  $(document).ready(function () {
  }).on('click', '#create-new-mess', function (event) {
    event.preventDefault();
    $('.overlay').fadeIn(300);
    $('.frame-popup#new-mess').fadeIn(300);
  }).on('submit', 'form#new-mess', form_new_mess_handler);
});
// -------------
// Валидация формы
// 
var regsObj = {
    EMAIL: /^[a-z0-9](?:[a-z0-9_\.-]*[a-z0-9])*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])*\.)+[a-z]{2,4}$/i,
    TEL: /^[0-9 \,\;\-\+\(\)\[\]]+$/i,
    EN_RU: /^[a-zA-Zа-яА-ЯёЁ _-]+$/i,
    EN_RU_D: /^[a-zA-Zа-яА-ЯёЁ0-9 _-]+$/i,
    DATE: /^[0-9 \.\/_-]+$/i,
    ALL: /^[\s\S]+$/i
  };
function form_new_mess_handler(event) {
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
    $('.frame-popup#new-mess').fadeOut(300);
  }
}