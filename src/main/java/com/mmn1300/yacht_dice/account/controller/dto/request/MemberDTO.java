package com.mmn1300.yacht_dice.account.controller.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
public class MemberDTO {
    @Size(min=8, max=15, message="아이디의 길이는 8자 이상 15자 이하여야 합니다.")
    @NotBlank(message="아이디가 존재해야 합니다.")
    public String userId;

    @Size(min=8, max=15, message="비밀번호의 길이는 8자 이상 15자 이하여야 합니다.")
    @NotBlank(message="비밀번호가 존재해야 합니다.")
    public String pw;

    @Size(min=1, max=45, message="닉네임의 길이는 1자 이상 45자 이하여야 합니다.")
    @NotBlank(message="닉네임이 존재해야 합니다.")
    public String name;

    @Size(min=3, max=80, message="이메일의 길이는 3자 이상 80자 이하여야 합니다.")
    @NotBlank(message="이메일이 존재해야 합니다.")
    public String email;

    @Size(min=13, max=13, message="휴대전화 번호는 13자여야 합니다.")
    @NotBlank(message="휴대전화 번호가 존재해야 합니다.")
    public String phone;
}