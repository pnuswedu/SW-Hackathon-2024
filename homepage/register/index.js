$(document).ready(function() {
    var id_oldVal = "";
    var pw_oldVal = "";
    var pw_chk_oldVal = "";
    var name_oldVal = "";
    var phone_back_oldVal = "";
    var email_oldVal = "";
    var class_oldVal = "";
    var stu_num_oldVal = "";

    $("#id").on("propertychange change keyup paste input", function() {
        var currentVal = $(this).val();
        if(currentVal == id_oldVal) return;
        id_oldVal = currentVal;
        if(!check_id(currentVal)) {
            $(this).removeClass('is-valid');
            $(this).addClass('is-invalid');
            $('label[for = "id"]').text("ID는 영어, 숫자로만 입력가능하며 4자리 이상 16자리 이하여야합니다.");
        }
        else {
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
            $('label[for = "id"]').text("ID 입력이 정상입니다.");
        }
    });

    $("#pw").on("propertychange change keyup paste input", function() {
        var currentVal = $(this).val();
        if(currentVal == pw_oldVal) return;
        pw_oldVal = currentVal;
        if(!check_pw(currentVal)) {
            $(this).removeClass('is-valid');
            $(this).addClass('is-invalid');
            if(check_special(currentVal)) {
                $('label[for = "pw"]').text("사용할 수 없는 특수문자가 포함되었습니다.");
            }
            else {
                $('label[for = "pw"]').text("비밀번호는 영어, 숫자, 특수문자로만 입력가능하며 8자리 이상 16자리 이하여야합니다.");
            }
        }
        else {
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
            $('label[for = "pw"]').text("비밀번호가 정상입니다.");
        }
    });

    $("#pw_chk").on("propertychange change keyup paste input", function() {
        var currentVal = $(this).val();
        if(currentVal == pw_chk_oldVal) return;
        pw_chk_oldVal = currentVal;
        if(pw_oldVal != currentVal) {
            $(this).removeClass('is-valid');
            $(this).addClass('is-invalid');
            $('label[for = "pw_chk"]').text("비밀번호가 일치하지 않습니다.");
        }
        else {
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
            $('label[for = "pw_chk"]').text("비밀번호가 일치합니다.");
        }
    });

    $("#name").on("propertychange change keyup paste input", function() {
        var currentVal = $(this).val();
        if(currentVal == name_oldVal) return;
        name_oldVal = currentVal;
        if(!check_name(currentVal)) {
            $(this).removeClass('is-valid');
            $(this).addClass('is-invalid');
            $('label[for = "name"]').text("유효하지 않은 이름입니다.");
        }
        else {
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
            $('label[for = "name"]').text("유효한 이름입니다.");
        }
    });

    $("#phone_back").on("propertychange change keyup paste input", function() {
        var currentVal = $(this).val();
        if(currentVal == phone_back_oldVal) return;
        var phone_front = $("#phone_front").val();
        phone_back_oldVal = currentVal;
        if(phone_front == "010") {
            if(!check_phone_010(currentVal)) {
                $(this).removeClass('is-valid');
                $(this).addClass('is-invalid');
                $('label[for = "phone_back"]').text("전화번호는 8자리여야 합니다.");
            }
            else {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
                $('label[for = "phone_back"]').text("전화번호 입력이 정상입니다.");
            }
        }
        else {
            if(!check_phone(currentVal)) {
                $(this).removeClass('is-valid');
                $(this).addClass('is-invalid');
                $('label[for = "phone_back"]').text("전화번호는 7자리여야 합니다.");
            }
            else {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
                $('label[for = "phone_back"]').text("전화번호 입력이 정상입니다.");
            }
            
        }
    });

    $("#email").on("propertychange change keyup paste input", function() {
        var currentVal = $(this).val();
        if(currentVal == email_oldVal) return;
        email_oldVal = currentVal;
        if(!check_email(currentVal)) {
            $(this).removeClass('is-valid');
            $(this).addClass('is-invalid');
            $('label[for = "email"]').text("유효하지 않은 이메일입니다.");
        }
        else {
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
            $('label[for = "email"]').text("유효한 이메일입니다.");
        }
    });

    $("#class").on("propertychange change keyup paste input", function() {
        var currentVal = $(this).val();
        if(currentVal == class_oldVal) return;
        class_oldVal = currentVal;
        if(!check_class(currentVal)) {
            $(this).removeClass('is-valid');
            $(this).addClass('is-invalid');
            $('label[for = "class"]').text("유효하지 않은 학과입니다.");
        }
        else {
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
            $('label[for = "class"]').text("유효한 학과입니다.");
        }
    });

    $("#stu_num").on("propertychange change keyup paste input", function() {
        var currentVal = $(this).val();
        if(currentVal == stu_num_oldVal) return;
        stu_num_oldVal = currentVal;
        if(!check_stu_num(currentVal)) {
            $(this).removeClass('is-valid');
            $(this).addClass('is-invalid');
            $('label[for = "stu_num"]').text("유효하지 않은 학번입니다.");
        }
        else {
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
            $('label[for = "stu_num"]').text("유효한 학번입니다.");
        }
    });


    // 다음 버튼 누르면 넘어가기
    let clickCount = 0;

    $("#first-page").show();
    $("#second-page, #third-page").hide();
    $("#register-txt").text("회원가입 (1/3)");

    $("#next-btn").on("click", function() {
        clickCount++;
        if (clickCount == 1) {
            $("#first-page").fadeOut(500, function() {
                $("#second-page").fadeIn(500);
            });
            $("#register-txt").text("회원가입 (2/3)");
        } else if (clickCount == 2) {
            $("#second-page").fadeOut(500, function() {
                $("#third-page").fadeIn(500);
                $("#next-btn").fadeOut(500);
            });
            $("#register-txt").text("회원가입 (3/3)");
        }
    });
});
