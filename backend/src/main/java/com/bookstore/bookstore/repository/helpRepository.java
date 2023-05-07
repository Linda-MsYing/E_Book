package com.bookstore.bookstore.repository;

import com.bookstore.bookstore.entity.help;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface helpRepository extends JpaRepository<help, Long> {

    List<help> findAll();
}
