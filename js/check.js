const not_word = /[^a-zA-Z0-9]/;
const special = /[-;'"\/\\:+= ]/;
const name_t = /[^a-zA-Z가-힣]/;
const stu_num = /\d{9}/;
const phone_010 = /\d{8}/;
const phone = /\d{7}/;
const email = /[a-z]+@[a-z]+.[a-z]+/;

function length_check(str, a, b) {
    return a <= str.length && str.length <= b;
}

function check_word(str) {
    return !not_word.test(str);
}

function check_special(str) {
    return special.test(str);
}

function check_id(str) {
    return check_word(str) && str.length >= 8;
}

function check_pw(str) {
    return !check_special(str) && length_check(str, 8, 16);
}

function check_name(str) {
    return !name_t.test(str) && length_check(str, 2, 30);
}

function check_phone_010(str) {
    return phone_010.test(str);
}

function check_phone(str) {
    return phone.test(str);
}

function check_email(str) {
    
}

function check_class(str) {

}

function check_stu_num(str) {
    return stu_num.test(str);
}