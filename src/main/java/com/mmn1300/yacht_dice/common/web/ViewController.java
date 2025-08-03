package com.mmn1300.yacht_dice.common.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ViewController {

    @GetMapping("/")
    public ModelAndView index(){
        return new ModelAndView("index");
    }


    @GetMapping("/login")
    public ModelAndView login(){
        return new ModelAndView("login");
    }


    @GetMapping("/signup")
    public ModelAndView signup(){
        return new ModelAndView("signup");
    }
}
