const check = require('./check.js');
const sql = require('./sql_func.js');

exports.register = function (res) {
    if(!check.check_id(res.body.id)) {
        check.make_alert("ID 입력형식이 잘못되었습니다.");
    }
    else if(check.pw != check.pw_chk) {
        check.make_alert('비밀번호가 일치하지 않습니다.');  
    }
    else if(!check.check_pw(res.body.pw)) {
        check.make_alert('PW 입력형식이 잘못되었습니다.');
    }
    else if(check.check_special(res.body.pw)) {
        check.make_alert('공백, -;"'+"'\/\\:+=은 사용할 수 없습니다.");
    }
    else if(res.body.phone_front == "010" && !check.check_phone_010(res.body.phone_last) || res.body.phone_front != "010" && !check.check_phone(res.body.phone_last)) {
        check.make_alert('전화번호 양식이 맞지 않습니다.');
    }
    else if(!check.email(res.body.email)) {
        check.make_alert('이메일 양식이 맞지 않습니다.');
    }
    else if(!check.class(res.body.class)) {
        check.make_alert('존재하지 않는 학과입니다.');
    }
    else if(!check.stu_num) {
        check.make_alert('학번 양식이 맞지 않습니다.');
    }
    else {
        sql.member_insert(res.body);
    }
}