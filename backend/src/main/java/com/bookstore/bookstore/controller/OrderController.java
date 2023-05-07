package com.bookstore.bookstore.controller;

import com.alibaba.fastjson.JSON;
import com.bookstore.bookstore.entity.*;
import com.bookstore.bookstore.repository.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.bookstore.bookstore.repository.BookRepository;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.ArrayList;

import static org.apache.tomcat.jni.SSL.getTime;


@RestController
public class OrderController {

    @Autowired
    private UserRepository userRepository;
    @GetMapping("/getOrders")
    public List<Order> getOrders (@RequestParam (required = false) String username,
                                  @RequestParam (required = false) String password){
        User user = userRepository.findByUsernameAndPassword("123456","123456");
        /* 管理员获取全部 */
        return userRepository.findById(user.getId()).getOrderList();
    };

    @Autowired
    private helpRepository helpRepo;
    @GetMapping("/getOrder")
    public List<help> getOrder (@RequestParam (required = false) String username,
                                @RequestParam (required = false) String password){
        User user = userRepository.findByUsernameAndPassword("123456","123456");
        /* 管理员获取全部 */
        return helpRepo.findAll();
    };

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private BookRepository bookRepository;
//    @GetMapping("/addOrderFromBook")
//    public ResponseEntity<Integer> addOrderFromBook (@RequestParam String username,
//                                                     @RequestParam String password,
//                                                     @RequestParam String bookname,
//                                                     @RequestParam String bookpricestr,
//                                                     @RequestParam String receivername,
//                                                     @RequestParam String address) {
//
//        User user = userRepository.findByUsernameAndPassword(username, password);
//
//        System.out.println(user.getId());
//        if (user == null) return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
//        else {
//            System.out.println("*(*&*&^*&(*&&^&&*&*^&*(')");
////            Order order = new Order();
//
//            OrderItem orderItem = new OrderItem();
////            Book book = bookRepository.findById(Integer.parseInt(bookidstr));
////            orderItem.setBook(book);
//            orderItem.setbookname(bookname);
//            orderItem.setBookcount(1);
//            orderItem.setBookprice(50);
////            orderItem.setOrder(order);
////            order.addOrderItem(orderItem);
////            order.setUser(user);
////            order.setPrice(50);
////            order.setReceivername(receivername);
////            order.setAddress(address);
////            Date date= new Date();
////            order.setTimestamp(new Timestamp(date.getTime()));
////            user.addOrderList(order);
////            userRepository.save(user);
////            Integer ans = order.getId();
//
//            return new ResponseEntity<>( HttpStatus.OK);
//        }
//    }
@GetMapping("/addOrderFromBook")
public ResponseEntity<Integer> addOrderFromBook (@RequestParam String username,
                                                 @RequestParam String password,
                                                 @RequestParam String bookname,
                                                 @RequestParam String bookprice,
                                                 @RequestParam String image) {

        User user = userRepository.findByUsernameAndPassword(username, password);
        help helps = new help(bookprice, bookname,image);
//        helpRepo.saveAndFlush(helps);
        var list=user.getHelpList();
        helps.setUser(user);
        list.add(helps);
        user.setHelpList(list);
        userRepository.save(user);
        return new ResponseEntity<>( HttpStatus.OK);
    }


//    @GetMapping("/addOrder")
//    public ResponseEntity<Integer> addOrderFromCart (@RequestParam String username,
//                                                     @RequestParam String password,
//                                                     @RequestParam String bookidstr,
//                                                     @RequestParam String bookcountstr,
//                                                     @RequestParam String bookpricestr,
//                                                     @RequestParam String receivername,
//                                                     @RequestParam String address) {
//
//        User user = userRepository.findByUsernameAndPassword(username, password);
//        List<Integer> bookid = JSON.parseArray(bookidstr, Integer.class);
//        List<Integer> bookcount = JSON.parseArray(bookcountstr, Integer.class);
//        List<Integer> bookprice = JSON.parseArray(bookpricestr, Integer.class);
//
//        System.out.println(user.getId());
//        if (user == null) return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
//        else {
//            Integer userid = user.getId();
//            /*计算订单总价*/
//            Integer len = bookid.size();
//            Integer totalprice = 0;
//            for (Integer i = 0; i < len; i++) {
//                totalprice += bookcount.get(i) * bookprice.get(i);
//            }
//
//
//            System.out.println("*(*&*&^*&(*&&^&&*&*^&*(')");
//            Order order = new Order();
//
//            for (Integer i = 0; i < len; i++) {
//                OrderItem orderItem = new OrderItem();
//                Book book = bookRepository.findById(bookid.get(i));
//                orderItem.setBook(book);
//                orderItem.setBookcount(bookcount.get(i));
//                orderItem.setBookprice(bookprice.get(i));
//                orderItem.setOrder(order);
//                order.addOrderItem(orderItem);
//            };
//            order.setUser(user);
//            order.setPrice(totalprice);
//            order.setReceivername(receivername);
//            order.setAddress(address);
//            user.addOrderList(order);
//            userRepository.save(user);
//            Integer ans = order.getId();
//
//            return new ResponseEntity<>(ans, HttpStatus.OK);
//        }
//    }

}



