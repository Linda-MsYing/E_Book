package com.bookstore.bookstore.controller;

import com.bookstore.bookstore.entity.Book;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
public class CartController {

    @GetMapping("/CartCheckOut")
    public ResponseEntity<List<Book>> CartCheckOut (@RequestParam String totalprice) {

        System.out.println(totalprice);
//        System.out.println(books);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}