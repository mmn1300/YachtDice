package com.mmn1300.yacht_dice.account.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "members")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // AUTO_INCREMENT를 설정
    private Long id;

    @Column(name = "user_id", length = 15, nullable = false, unique = true)
    private String userId;

    @Column(name = "password", length = 100, nullable = false)
    private String password;

    @Column(name = "nickname", length = 45, nullable = false)
    private String nickname;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "phone_number", length = 255)
    private String phoneNumber;

    @Column(name = "create_at", nullable = false)
    private LocalDateTime createAt;

    @Column(name = "level", nullable = false)
    private Integer level;

    @Column(name = "score_total", nullable = false)
    private Integer scoreTotal;

    @Column(name = "win_count", nullable = false)
    private Integer winCount;

    @Column(name = "lose_count", nullable = false)
    private Integer loseCount;

    @Column(name = "draw_count", nullable = false)
    private Integer drawCount;


    @Builder
    public Member (String userId, String password, String nickname, String email, String phoneNumber,
                    LocalDateTime createAt, Integer level){
        this.userId = userId;
        this.password = password;
        this.nickname = nickname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.createAt = createAt;
        this.level = level;
    }
}
