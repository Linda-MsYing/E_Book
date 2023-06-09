package com.bookstore.bookstore.repository;

import com.bookstore.bookstore.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Book findById(Integer id);
    List<Book> findAll();
    List<Book> findByBooknameContaining(String searchbookstr);
    List<Book> findByStateEquals(Integer state);

}
