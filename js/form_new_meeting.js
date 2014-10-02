$(function () {
  calendar_handler();
  timepicker_handlers();
  /*
  */
  $(document).ready(function () {
  }).on('click', '#create-new-meeting', function (event) {
    event.preventDefault();
    $('.overlay').fadeIn(300);
    $('.popup#new-meeting').fadeIn(300);
  }).on('click', '.search-result .big-close', function (event) {
    event.preventDefault();
    $(this).parent('li').fadeOut(300);
  }).on('submit', 'form#new-meeting-form', form_new_meeting_handler);
});
// -------------
function calendar_handler() {
  $('input#date').Zebra_DatePicker({
    months: [
      '\u042f\u043d\u0432\u0430\u0440\u044c',
      '\u0424\u0435\u0432\u0440\u0430\u043b\u044c',
      '\u041c\u0430\u0440\u0442',
      '\u0410\u043f\u0440\u0435\u043b\u044c',
      '\u041c\u0430\u0439',
      '\u0418\u044e\u043d\u044c',
      '\u0418\u044e\u043b\u044c',
      '\u0410\u0432\u0433\u0443\u0441\u0442',
      '\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c',
      '\u041e\u043a\u0442\u044f\u0431\u0440\u044c',
      '\u041d\u043e\u044f\u0431\u0440\u044c',
      '\u0414\u0435\u043a\u0430\u0431\u0440\u044c'
    ],
    days: [
      '\u0412\u0441',
      '\u041f\u043d',
      '\u0412\u0442',
      '\u0421\u0440',
      '\u0427\u0442',
      '\u041f\u0442',
      '\u0421\u0431'
    ],
    show_icon: false,
    show_select_today: '\u0421\u0435\u0433\u043e\u0434\u043d\u044f',
    show_clear_date: true,
    lang_clear_date: '\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c'
  });
}
function timepicker_handlers() {
  $('.timepicker').timepicker({ step: 60 });
}
// валидация форм
var regsObj = {
    EMAIL: /^[a-z0-9](?:[a-z0-9_\.-]*[a-z0-9])*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])*\.)+[a-z]{2,4}$/i,
    TEL: /^[0-9 \,\;\-\+\(\)\[\]]+$/i,
    EN_RU: /^[a-zA-Zа-яА-ЯёЁ _-]+$/i,
    EN_RU_D: /^[a-zA-Zа-яА-ЯёЁ0-9 _-]+$/i,
    DATE: /^[0-9 \.\/_-]+$/i,
    ALL: /^[\s\S]+$/i
  };
// Валидация формы
function form_new_meeting_handler(event) {
  var form_data = {
      name: $('input#name').val(),
      place: $('input#place').val(),
      date: $('input#date').val(),
      time_from: $('input#time-from').val(),
      time_to: $('input#time-to').val(),
      comment: $('textarea#comment').val()
    };
  var is_err = false;
  $('span.err').hide();
  if (!regsObj.EN_RU_D.test(form_data.name)) {
    $('input#name').next('span.err').show();
    is_err = true;
  }
  if (!regsObj.ALL.test(form_data.place)) {
    $('input#place').next('span.err').show();
    is_err = true;
  }
  if (!regsObj.DATE.test(form_data.date)) {
    $('input#date').next('span.err').show();
    is_err = true;
  }
  if (!regsObj.DATE.test(form_data.time_from) && form_data.time_to == ':') {
    $('input#time-to').next('span.err').show();
    is_err = true;
  }
  if (!regsObj.DATE.test(form_data.time_to) && form_data.time_to == ':') {
    $('input#time_to').next('span.err').show();
    is_err = true;
  }
  if (!regsObj.ALL.test(form_data.comment)) {
    $('textarea#comment').next('span.err').show();
    is_err = true;
  }
  if (is_err) {
    event.preventDefault();
  } else {
    $('.overlay').fadeOut(300);
    $('.popup#new-mess').fadeOut(300);
  }
}