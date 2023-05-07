package com.bookstore.bookstore.controller;

import com.bookstore.bookstore.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bookstore.bookstore.repository.UserRepository;





@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @GetMapping("/login") /*检查是否能进入首页*/
    public ResponseEntity<User> login (@RequestParam (required = false) String username,
                                               @RequestParam (required = false) String password) {
        System.out.println(username);
        System.out.println(password);
        User user = userRepository.findByUsernameAndPassword(username,password);
        System.out.println(user.getId());
        if (user == null) return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        else return new ResponseEntity<>(user, HttpStatus.OK);
    }

}