$(function () {
  calendar_handler();
  timepicker_handlers();
  /*
  */
  $(document).ready(function () {
  }).on('click', '', function (event) {
    event.preventDefault();
  });
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