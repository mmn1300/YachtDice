package com.mmn1300.yacht_dice.account.service;

import com.mmn1300.yacht_dice.account.controller.dto.request.MemberDTO;
import com.mmn1300.yacht_dice.account.domain.entity.Member;
import com.mmn1300.yacht_dice.account.service.command.AccountServiceCommands;
import com.mmn1300.yacht_dice.account.service.query.AccountServiceQuerys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AccountServiceImpl implements AccountService{

    @Autowired
    private AccountServiceQuerys accountServiceQuerys;

    @Autowired
    private AccountServiceCommands accountServiceCommands;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;



    @Override
    public boolean memberExistsById (String username) {
        return accountServiceQuerys.memberExistsById(username);
    }


    @Override
    public void saveNewMember(MemberDTO memberDTO) throws Exception {
        // 비밀번호 암호화
        String encodedPassword = bCryptPasswordEncoder.encode(memberDTO.getPw());

        Member member = Member.builder()
            .username(memberDTO.getUserId())
            .password(encodedPassword)
            .nickname(memberDTO.getName())
            .email(memberDTO.getEmail())
            .phoneNumber(memberDTO.getPhone())
            .createAt(LocalDateTime.now().withNano(0))
            .build();

        accountServiceCommands.save(member);
    }

}
