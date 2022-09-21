const moment = require('moment');

function date(format) {
    return moment().format(format);
}

exports.currentDate = date;
