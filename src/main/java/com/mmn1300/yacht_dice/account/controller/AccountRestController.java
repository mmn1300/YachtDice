package com.mmn1300.yacht_dice.account.controller;

import com.mmn1300.yacht_dice.account.controller.dto.request.MemberDTO;
import com.mmn1300.yacht_dice.account.service.AccountService;
import com.mmn1300.yacht_dice.common.web.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
public class AccountRestController {

    @Autowired
    private AccountService accountService;


    /*
    *
    * GET 메소드
    *
    */

    @GetMapping("/{username}")
    public ResponseEntity<ApiResponse<Boolean>> checkId(@PathVariable("username") String username) throws Exception {
        return ResponseEntity.ok(ApiResponse.ok(accountService.memberExistsById(username)));
    }



    /*
    *
    * POST 메소드
    *
    */


    @PostMapping("/member")
    public ResponseEntity<ApiResponse<Boolean>> setMember(@Valid @RequestBody MemberDTO memberDTO) throws Exception {
        accountService.saveNewMember(memberDTO);
        return ResponseEntity.ok(ApiResponse.ok(true));
    }


    /*
    *
    * PUT 메소드
    *
    */


    /*
    *
    * DELETE 메소드
    *
    * */
}
