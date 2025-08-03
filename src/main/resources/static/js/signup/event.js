$(document).ready(() => {
    // 아이디 변경시 플래그 제어
    $('#id').on('change', idChangeEventHandler);

    // 비밀번호 변경시 플래그 및 메세지 변경
    $('#pw').on('change', (e) => passwordChangeEventHandler(e));

    // 비밀번호 확인란 변경시 플래그 및 메세지 변경
    $('#pw-check').on('change', (e) => passwordCheckChangeEventHandler(e));

    // 닉네임 변경시 플래그 제어
    $('#nickname').on('change', (e) => nicknameChangeEventHandler(e));

    // 이메일 변경시 플래그 제어
    $('#email').on('change', (e) => emailChangeEventHandler(e));

    // 이메일 도메인 주소 변경시 플래그 제어
    $('#email-domain').on('change', (e) => emailDomainChangeEventHandler(e));

    // 전화번호(좌) 변경시 플래그 제어
    $('#phone').on('change', (e) => phoneNumberLeftChangeEventHandler(e));

    // 전화번호(중) 변경시 플래그 제어
    $('#phone2').on('change', (e) => phoneNumberCenterChangeEventHandler(e));

    // 전화번호(우) 변경시 플래그 제어
    $('#phone3').on('change', (e) => phoneNumberRightChangeEventHandler(e));


    $('#id-redundancy-check').on('click', idCheckClickEventHandler);


    // Tab 키 누를시 입력창 전환
    $('input').on('keydown', (event) => inputsEventHandler(event));


    // 최종 검사 및 계정 생성 요청
    $('#sign-up').on('click', createAccount);


    // 이전 페이지로 돌아가기 전 입력창 내부에 값이 남아있을 경우 한번 더 확인
    $('#back-page').on('click', backPageClickEventHandler);
});