moment.locale('ja');
$(document).ready(function () {
    const defaultDateFormat = moment().format('LL');
    $('#defaultDateFormat').html(defaultDateFormat);
})