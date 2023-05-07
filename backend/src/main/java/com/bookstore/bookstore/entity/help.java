package com.bookstore.bookstore.entity;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "helps")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class help {

    @ManyToOne
    @JoinColumn(name = "userid", referencedColumnName = "id")
    private User user;
    @Id
    @Column(name = "id")
    private int orderId1;
    @Column(name = "receivername1")
    private String receivername1;
    @Column(name = "address1")
    private String address1;
    @Column(name = "totalprice1")
    private String totalprice1;

    @Column(name = "bookname1")
    private String bookname1;
    @Column(name = "bookcount1")
    private int bookcount1;
    @Column(name = "image")
    private String image;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    public help(String totalprice1, String bookname1,String image){
        this.totalprice1 = totalprice1;
        this.bookname1 = bookname1;
        this.bookcount1 = 1;
        this.receivername1 = "Tom";
        this.address1 = "Shanghai";
        this.image = image;
    }

    public help() {
        this.totalprice1 = "";
        this.bookname1 = "";
        this.bookcount1 = 1;
        this.receivername1 = "Tom";
        this.address1 = "Shanghai";
        this.image = "";
    }
}
