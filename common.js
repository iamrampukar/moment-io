moment.locale('ja');
$(document).ready(function () {
    const defaultFormat = "YYYY-MM-DD HH:mm:ss";
    const yearFormat = "YYYY-MM-DD";
    const nowDate = new Date();
    const defaultDateFormat = moment(nowDate).format(defaultFormat);
    $('#defaultDateFormat').html(defaultDateFormat);

    // const startDate = moment('1995-01-01', 'YYYY-MM-DD');
    // const endDate = moment('2021-05-15', 'YYYY-MM-DD');
    // const yearDiff = endDate.diff(startDate, 'years');
    // $('#yearDifference').html(`startDate: ${startDate}, endDate: ${endDate} => <strong>${yearDiff} Years</strong>`);
})