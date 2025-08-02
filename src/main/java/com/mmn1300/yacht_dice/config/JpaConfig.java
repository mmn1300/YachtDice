package com.mmn1300.yacht_dice.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = {
        "project.yacht_dice.account.repository"
})
@EntityScan(basePackages = {
        "project.yacht_dice.account.domain.entity"
})
//@ComponentScan(basePackages = {
//        "project.yacht_dice.account.service.dao"
//})
public class JpaConfig {}
