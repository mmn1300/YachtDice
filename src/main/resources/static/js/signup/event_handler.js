const idChangeEventHandler = () => {
    checkFlag["id"] = false;
    const $iconImg = $('.icon-img');
    $iconImg.eq(0).attr('src', uncheckedImgPath);
};

const passwordChangeEventHandler = (e) => {
    const $pwCheck = $('#pw-check');
    const $pwCheckText = $('#pw-check-text');
    const $iconImg = $('.icon-img');
    checkFlag["pw"] = false;
    $iconImg.eq(1).attr('src', uncheckedImgPath);
    $iconImg.eq(2).attr('src', uncheckedImgPath);

    if($(e.currentTarget).val().length >= 8){
        // 글자제한 모두 만족시
        if($(e.currentTarget).val().length <= 15){

            // 비밀번호 확인 미 입력시
            if($pwCheck.val().trim() === ''){
                $pwCheckText.text('비밀번호 확인란을 입력해주세요.');
                $pwCheckText.attr('class', 'highlight-black');
                $iconImg.eq(1).attr('src', checkedImgPath);
            }

            // 비밀번호와 확인의 값 일치시
            else if($(e.currentTarget).val() === $pwCheck.val().trim()){
                $pwCheckText.text('비밀번호가 일치합니다.');
                $pwCheckText.attr('class', 'highlight-blue');
                checkFlag["pw"] = true;
                $iconImg.eq(1).attr('src', checkedImgPath);
                $iconImg.eq(2).attr('src', checkedImgPath);
            }

            // 비밀번호와 확인의 값 미일치시
            else{
                $pwCheckText.text('비밀번호가 일치하지 않습니다.');
                $pwCheckText.attr('class', 'highlight-red');
                $iconImg.eq(1).attr('src', checkedImgPath);
            }
        }else{
            $pwCheckText.text('비밀번호는 열다섯 글자까지만 입력할 수 있습니다.');
            $pwCheckText.attr('class', 'highlight-red');
        }
    }else{
        $pwCheckText.text('비밀번호는 여덟글자 이상이어야 합니다.');
        $pwCheckText.attr('class', 'highlight-red');
    }
};

const passwordCheckChangeEventHandler = (e) => {
    const $pw = $('#pw');
    const $pwCheckText = $('#pw-check-text');
    const $iconImg = $('.icon-img');
    checkFlag["pw"] = false;
    $iconImg.eq(2).attr('src', uncheckedImgPath);

    // 비밀번호 확인 미 입력시
    if($pw.val().trim() === ''){
        $pwCheckText.text('비밀번호란을 입력해주세요.');
        $pwCheckText.attr('class', 'highlight-black');
    }

    // 비밀번호와 확인의 값 일치시
    else if($(e.currentTarget).val() === $pw.val().trim()){
        if($pw.val().length >= 8){
            if($pw.val().length <= 15){
                $pwCheckText.text('비밀번호가 일치합니다.');
                $pwCheckText.attr('class', 'highlight-blue');
                checkFlag["pw"] = true;
                $iconImg.eq(1).attr('src', checkedImgPath);
                $iconImg.eq(2).attr('src', checkedImgPath);
            }else{
                $pwCheckText.text('비밀번호는 열다섯 글자까지만 입력할 수 있습니다.');
                $pwCheckText.attr('class', 'highlight-red');
                attr('class', 'highlight-red');
            }
        }else{
            $pwCheckText.text('비밀번호는 여덟글자 이상이어야 합니다.');
            $pwCheckText.attr('class', 'highlight-red');
        }

    // 비밀번호와 확인의 값 미일치시
    }else{
        $pwCheckText.text('비밀번호가 일치하지 않습니다.');
        $pwCheckText.attr('class', 'highlight-red');
    }
};

const nicknameChangeEventHandler = (e) => {
    const len = $(e.currentTarget).val().length;
    const $iconImg = $('.icon-img');
    if($(e.currentTarget).val() === '' || len > 10){
        $iconImg.eq(3).attr('src', uncheckedImgPath);
        checkFlag["name"] = false;
    }else{
        $iconImg.eq(3).attr('src', checkedImgPath);
        checkFlag["name"] = true;
    }
};

const emailChangeEventHandler = (e) => {
    const emailId = $(e.currentTarget).val();
    const emailDomain = $('#email-domain').val();
    const $iconImg = $('.icon-img');

    if(emailId === '' || emailDomain === ''){
        $iconImg.eq(4).attr('src', uncheckedImgPath);
        checkFlag["email"] = false;
    }else{
        $iconImg.eq(4).attr('src', checkedImgPath);
        checkFlag["email"] = true;
    }
};

const emailDomainChangeEventHandler = (e) => {
    const emailId = $('#email').val();
    const emailDomain = $(e.currentTarget).val();
    const $iconImg = $('.icon-img');

    if(emailId === '' || emailDomain === ''){
        $iconImg.eq(4).attr('src', uncheckedImgPath);
        checkFlag["email"] = false;
    }else{
        $iconImg.eq(4).attr('src', checkedImgPath);
        checkFlag["email"] = true;
    }
};

const phoneNumberLeftChangeEventHandler = (e) => {
    const phone = $(e.currentTarget).val();
    const phone2 = $('#phone2').val();
    const phone3 = $('#phone3').val();
    const $iconImg = $('.icon-img');

    if(phone.length !== 3 || phone2.length !== 4 || phone3.length !== 4){
        $iconImg.eq(5).attr('src', uncheckedImgPath);
        checkFlag["phone"] = false;
    }else{
        $iconImg.eq(5).attr('src', checkedImgPath);
        checkFlag["phone"] = true;
    }
};

const phoneNumberCenterChangeEventHandler = (e) => {
    const phone = $('#phone').val();
    const phone2 = $(e.currentTarget).val();
    const phone3 = $('#phone3').val();
    const $iconImg = $('.icon-img');

    if(phone.length !== 3 || phone2.length !== 4 || phone3.length !== 4){
        $iconImg.eq(5).attr('src', uncheckedImgPath);
        checkFlag["phone"] = false;
    }else{
        $iconImg.eq(5).attr('src', checkedImgPath);
        checkFlag["phone"] = true;
    }
};

const phoneNumberRightChangeEventHandler = (e) => {
    const phone = $('#phone').val();
    const phone2 = $('#phone2').val();
    const phone3 = $(e.currentTarget).val();
    const $iconImg = $('.icon-img');

    if(phone.length !== 3 || phone2.length !== 4 || phone3.length !== 4){
        $iconImg.eq(5).attr('src', uncheckedImgPath);
        checkFlag["phone"] = false;
    }else{
        $iconImg.eq(5).attr('src', checkedImgPath);
        checkFlag["phone"] = true;
    }
};


const idCheckClickEventHandler = () => {
    const id = $("#id").val();
    if(id.length > 15){
        alert('아이디는 열다섯 글자까지만 입력할 수 있습니다.');
    }else if(id.trim() === ''){
        alert('아이디를 입력해주세요.');
    }else{
        idCheckRequestAsync(id).then(result => {
            const resultData = result["data"];
            if(resultData["message"] && resultData["data"] === false){
                alert('생성 가능한 아이디입니다!');
                const $iconImg = $('.icon-img');
                $iconImg.eq(0).attr('src', checkedImgPath);
                checkFlag['id'] = true;
            }else if(resultData["message"] && resultData["data"]){
                alert('이미 존재하는 아이디입니다!');
            }
        });
    }
};


const inputsEventHandler = (event) => {
    if (event.key === 'Tab') {
        event.preventDefault();
        const nextIndex = (index + 1) % $inputs.length;
        $inputs[nextIndex].focus();
    }
};


const backPageClickEventHandler = () => {
    const $inputs = $('input');
    let allEmpty = true;

    $inputs.each((index, input) => {
        if ($(input).val().trim() !== '') {
            allEmpty = false;
        }
    });

    if(allEmpty){
        $(location).attr('href', '/login');
    }else if(confirm('회원가입을 취소하시겠습니까?')){
        $(location).attr('href', '/login');
    }
};