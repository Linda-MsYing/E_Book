package com.bookstore.bookstore.controller;

import com.bookstore.bookstore.entity.User;
import com.bookstore.bookstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bookstore.bookstore.entity.Book;
import com.bookstore.bookstore.repository.BookRepository;

import java.util.ArrayList;
import java.util.List;



@RestController
public class BookController {

    @Autowired
    private BookRepository bookRepo;
    @GetMapping("/getBooks")
    public ResponseEntity<List<Book>> getBooks () {
        return new ResponseEntity<>(bookRepo.findAll(), HttpStatus.OK);
    }
}