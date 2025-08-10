package com.mmn1300.yacht_dice.account.repository;

import com.mmn1300.yacht_dice.account.domain.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepositoryQuerys extends JpaRepository<Member, Long> {
    boolean existsByUsername(String userId);
}
