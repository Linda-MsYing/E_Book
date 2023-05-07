package com.bookstore.bookstore.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name = "userpros")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
@DynamicUpdate
@DynamicInsert
public class UserPro {
    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "userid", referencedColumnName = "id")
    private User user = null;
    @Id
    @Column(name = "id")
    private int Id;
    @Column(name = "name")
    private String name;
    @Column(name = "tel")
    private String tel;
    @Column(name = "address")
    private String address;
}
