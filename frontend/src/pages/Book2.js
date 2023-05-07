import React from 'react';
import '../css/Book.css';
import '../css/w3.css'
// import Button from '../components/Button';

import { withRouter } from "react-router-dom";
import { Component } from 'react';
import { Button } from 'antd';
import axios from 'axios';

function addNewItem(bookoj)
{
    var booklist = JSON.parse(window.localStorage.booklist);
    var len = booklist.length;
    // var booklist = window.localStorage.booklist;
    for(var i=0;i<len;i++){
        if(booklist[i].name===bookoj.name){
            booklist[i].numbers++;
            window.localStorage.booklist = JSON.stringify(booklist);
            return;
        }
    }
    booklist.push({ id:bookoj.id,cover:bookoj.image,name: bookoj.name, datas: bookoj.author, price: bookoj.price, numbers: 1 });
    window.localStorage.booklist = JSON.stringify(booklist);
    return;


};

function addNewOrder(bookoj)
{
    axios({
        method: 'GET',
        url: 'http://localhost:9092/addOrderFromBook',
        params: {
            username: '123456',
            password: '123456',
            bookname: bookoj.name,
            bookprice: bookoj.price,
            image: bookoj.image,
        }
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error)
        alert("添加订单失败")
    })

    return;
};

class Book extends  Component {
  render() {
    // console.log(this.props.location.state.author);
    const bookoj = this.props.location.state;
    // console.log(bookoj);
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: "\nbody,h1,h2,h3,h4,h5 {font-family: \"Raleway\", sans-serif}\n" }} />

        <div className="w3-content" style={{ maxWidth: '1200px' }}>
          <header className="w3-container w3-center w3-padding-32">

            <p> <span className="w3-tag">{bookoj.name}</span></p>
          </header>

          <div className="w3-row">
            {/* Blog entries */}
            <div className="w3-col l8 s12">
              {/* Blog entry */}
              <div className="w3-card-4 w3-margin w3-white" style={{ maxWidth: '1400px' }}>

                <img src={bookoj.image} alt="Nature" style={{ width: '100%' }} />
                
                <div className="w3-container">
                  <h1><b>{bookoj.name}</b></h1>
                  <h3><b>{bookoj.author}</b></h3>
                  <h5><b>Price: {bookoj.price}</b></h5>
                </div>

                <div className="w3-container">
                  <p>Description: {bookoj.description}
                </p>


                  <div className="w3-row">
                    <div className="w3-col m8 s12">
                      <p>
                          <Button
                              style={{ marginRight: -20 }}
                              size="large"
                              type="Default"
                              onClick={()=>addNewItem(bookoj)}
                          >
                              Add to cart »
                          </Button>
                          <Button
                              style={{ marginRight: -20 }}
                              size="large"
                              type="Default"
                              onClick={()=>addNewOrder(bookoj)}
                          >
                              Buy Now>>
                          </Button>
                      </p>
                    </div>
                    <div className="w3-col m4 w3-hide-small">
                      <Button
                          style={{ marginRight: -20 }}
                          size="large"
                          type="Default"
                      >
                          Comment
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            {/* Introduction menu */}
            <div className="w3-col l4">
               About Card
              <div className="w3-card w3-margin w3-margin-top">
                <img src={bookoj.image} style={{ width: '100%' }} />
                <div className="w3-container w3-white">
                  <h3><b>A Small Window Overview</b></h3>
                  <h4><b>Product details</b></h4>
                  <h6><b> Author :</b> {bookoj.author}</h6>
                  <h6><b> type :</b> {bookoj.type} </h6>
                  <h6><b> isbn:</b> {bookoj.isbn}</h6>
                  <h6><b> price:</b> {bookoj.price}</h6>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Book);
