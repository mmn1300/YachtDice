const checkedImgPath = '/img/checked.png';
const uncheckedImgPath = '/img/unchecked.png';

const checkFlag = {
    id : false,
    pw : false,
    name : false,
    email : false,
    phone : false 
}


// 최종 검사
const checkData = () => {
    if(!checkFlag["id"]){
        alert("아이디 중복 확인이 필요합니다.");
        return false;
    }
    if(!checkFlag["pw"]){
        alert("생성할 수 없는 형태의 비밀번호입니다.");
        return false;
    }
    if(!checkFlag["name"]){
        alert("생성할 수 없는 형태의 닉네임입니다.");
        return false;
    }
    if(!checkFlag["email"]){
        alert("유효하지 않은 형태의 이메일입니다.");
        return false;
    }
    if(!checkFlag["phone"]){
        alert("유효하지 않은 형태의 전화번호입니다.");
        return false;
    }

    return true;
};


// 계정 생성 요청
const createAccount = () => {
    if(checkData() === false){
        return;
    }

//    const csrfToken = $("meta[name='_csrf']").attr("content");

    const email = $('#email').val() + '@' + $('#email-domain').val();
    const phone = $('#phone').val() + '-' +
                  $('#phone2').val() + '-' +
                  $('#phone3').val();

    data = {
        userId : $('#id').val(),
        pw : $('#pw').val(),
        name : $('#nickname').val(),
        email : email,
        phone : phone
    }
    
    signupAsync(data).then(res => {
        if(res["data"]){
            alert("회원가입이 완료되었습니다.");
            $(location).attr('href', '/login');
        }else{
            console.error(res["error"]);
            return;
        }
    });
};