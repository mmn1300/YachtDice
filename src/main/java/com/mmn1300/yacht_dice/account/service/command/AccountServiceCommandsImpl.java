package com.mmn1300.yacht_dice.account.service.command;

import com.mmn1300.yacht_dice.account.domain.entity.Member;
import com.mmn1300.yacht_dice.account.repository.AccountRepositoryCommands;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AccountServiceCommandsImpl implements AccountServiceCommands{

    @Autowired
    private AccountRepositoryCommands accountRepository;


    @Override
    @Transactional(isolation = Isolation.SERIALIZABLE)
    public void save(Member member) throws Exception {
        accountRepository.save(member);
    }
}
