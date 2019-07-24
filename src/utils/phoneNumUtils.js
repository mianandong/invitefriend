function isMobileNumber(phone) {
    let flag = false;
    let message = "";
    let reg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;
    if (phone == '') {
        message = "手机号码不能为空！";
    } else if (phone.length != 11) {
        message = "请输入11位手机号码！";
    } else if (!reg.test(phone)) {
        message = "请输入有效的手机号码！";
    } else {
        message = "手机号正确";
        flag = true;
    }
    return {'flag':flag, 'message': message};
}

function initPhoneNum(phone) {
    let str = phone.replace(/ /g, '');
    let len = str.length;
    let result = '';
    switch (true) {
        case len > 11:
            str = str.substr(0, 3) + ' ' + str.substr(3, 4) + ' ' + str.substr(7, 4);
            result = str;
            break;
        case len > 7:
            str = str.substr(0, 3) + ' ' + str.substr(3, 4) + ' ' + str.substr(7);
            result = str;
            break;
        case len > 3:
            str = str.substr(0, 3) + ' ' + str.substr(3);
            result = str;
            break;
        default:
            result = str;
    }
    return result;
}

module.exports = {
    isMobileNumber,
    initPhoneNum
}