package com.mmn1300.yacht_dice.account.service;

import com.mmn1300.yacht_dice.account.controller.dto.request.MemberDTO;

public interface AccountService {

    public boolean memberExistsById(String username);

    public void saveNewMember(MemberDTO memberDTO) throws Exception;
}
