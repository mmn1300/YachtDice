package com.mmn1300.yacht_dice.account.service.command;

import com.mmn1300.yacht_dice.account.domain.entity.Member;

public interface AccountServiceCommands {

    public void save(Member member) throws Exception;
}
