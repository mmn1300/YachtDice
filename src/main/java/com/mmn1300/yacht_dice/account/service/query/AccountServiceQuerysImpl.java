package com.mmn1300.yacht_dice.account.service.query;

import com.mmn1300.yacht_dice.account.repository.AccountRepositoryQuerys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class AccountServiceQuerysImpl implements AccountServiceQuerys {

    @Autowired
    private AccountRepositoryQuerys accountRepositoryQuerys;



    @Override
    public boolean memberExistsById(String username) {
        return accountRepositoryQuerys.existsByUsername(username);
    }
}
