import React from 'react';
import '../css/Cards.css';
import CardItem from './CardItem';
import SearchBox from './SearchBox';
// import Books from './Books';
// import Pagination from './Pagination'
import {BookCarousel} from "../components/BookCarousel";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function Cards() {

    axios({
        method: 'GET',
        url: 'http://localhost:9092/getBooks',
    }).then(response => {
        console.log(response)
        // alert("get data success");
    }).catch(error => {
        console.log(error)
        alert("fail to get data");
    })

    let { keyword } = useParams();
    const [books, setBooks] = useState(null);
    useEffect(function effectFunction() {
        async function fetchBooks() {
            const res = await fetch("http://localhost:9092/getBooks");
            if (!res.ok) throw res;
            const json = await res.json();
            if (json.error) throw res;
            setBooks(json);
        }
        fetchBooks();
    }, []);
    var cards;
    console.log(books);
    if (typeof keyword == "undefined")
        cards =
            books == null
                ? () => <div />
                : Object.values(books).map((i) => (
                    <CardItem
                        id={i.id}
                        text={i.bookname}
                        author={i.author}
                        price={i.price}
                        ISBN ={i.isbn}
                        src={i.image}
                        // inventory = {i.inventory}
                        // label={i.type}
                        path= '/Book'
                    />
                ));
    else
        cards =
            books == null
                ? () => <div />
                : Object.values(books)
                    .filter((i) => Object.values(i).join().includes(keyword))
                    .map((i) => (
                        <CardItem
                            id={i.id}
                            text={i.bookname}
                            author={i.author}
                            price={i.price}
                            ISBN ={i.isbn}
                            src={i.image}
                            inventory = {i.inventory}
                            label={i.type}
                            path= '/Book'
                        />
                    ));
  return (
    <div className='cards'>
      <h1>OUR COMMAND!</h1>
      <SearchBox />
      <BookCarousel />

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {cards}

          {/*  <CardItem*/}
          {/*    src='images/harryCoverSingle.jpeg'*/}
          {/*    text='Harry Potter'*/}
          {/*    label='novel'*/}
          {/*    path='/Book'*/}
          {/*    author = 'J·K·Rowling'*/}
          {/*    price = '$50'*/}
          {/*    ISBN = '978-7-107-18618-1'*/}
          {/*    inventory = '50'*/}
          {/*  />*/}
          {/*  <CardItem*/}
          {/*        src='images/3bodyCoverSingle.jpeg'*/}
          {/*        text='Three body'*/}
          {/*        label='novel'*/}
          {/*        path='/Book'*/}
          {/*        author = 'Chinese:Liu Cixin'*/}
          {/*        price = '45'*/}
          {/*        ISBN = '978-7-107-18618-1'*/}
          {/*        inventory = '40'*/}
          {/*  />*/}

          {/*  <CardItem*/}
          {/*    src='images/JobsCover.jpeg'*/}
          {/*    text='Steve Jobs'*/}
          {/*    label='biographies'*/}
          {/*    path='/Book'*/}
          {/*    author = 'Walter Isaacson'*/}
          {/*    price = '115'*/}
          {/*    ISBN = '978-7-107-18618-1'*/}
          {/*    inventory = '100'*/}
          {/*  />*/}
          {/*   <CardItem*/}
          {/*    src='images/MuskCover.jpeg'*/}
          {/*    text='Elon Musk'*/}
          {/*    label='biographies'*/}
          {/*    path='/Book'*/}
          {/*    author = 'Ashlee VANCE'*/}
          {/*    price = '50'*/}
          {/*    ISBN = '978-7-107-18618-1'*/}
          {/*    inventory = '100'*/}
          {/*  />*/}

          {/*</ul>*/}
          {/*<ul className='cards__items'>*/}
          {/*  <CardItem*/}
          {/*    src='images/PPCoverSingle.jpeg'*/}
          {/*    text='Pride and Prejudice'*/}
          {/*    label='Classic'*/}
          {/*    path='/Book'*/}
          {/*    author = 'Jane Austen'*/}
          {/*    price = '70'*/}
          {/*    ISBN = '978-7-107-18618-1'*/}
          {/*    inventory = '100'*/}
          {/*  />*/}
          {/*  <CardItem*/}
          {/*    src='images/APromiseCoverSingle.jpg'*/}
          {/*    text= 'A Promised Land'*/}
          {/*    label='Classic'*/}
          {/*    path='/Book'*/}
          {/*    author = 'Barack Obama'*/}
          {/*    price = '50'*/}
          {/*    ISBN = '978-7-107-18618-1'*/}
          {/*    inventory = '100'*/}
          {/*  />*/}
          {/*  <CardItem*/}
          {/*    src='images/travelHomeCoverSingle.jpg'*/}
          {/*    text='Travel Home: Design with a Global Spirit'*/}
          {/*    label='Classic'*/}
          {/*    path='/Book'*/}
          {/*    author = 'Gabriel García'*/}
          {/*    price = '50'*/}
          {/*    ISBN = '978-7-107-18618-1'*/}
          {/*    inventory = '100'*/}
          {/*  />*/}
          {/*  <CardItem*/}
          {/*    src='images/madeSingleCover.jpeg'*/}
          {/*    text='One hundred years of solitude'*/}
          {/*    label='Classic'*/}
          {/*    path='/Book'*/}
          {/*    author = 'Gabriel García'*/}
          {/*    price = '50'*/}
          {/*    ISBN = '978-7-107-18618-1'*/}
          {/*    inventory = '100'*/}
          {/*  />*/}
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
