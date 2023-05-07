import React from 'react';
import '../App.css';
import '../css/Cart.css';
 // import Button from '../components/Button';
import { Button, Input, Select, Space, Radio,Image, Upload } from 'antd';
import axios from 'axios';

function formatPrice(price) {
  // if (typeof price !== "number") {
  //   price = Number("aaa") || 0
  //   price= Number(price)
  // }
  return "¥" + Number(price).toFixed(2)
}

const castyle = {
  width: 900,
  // height: 240,
  // marginLeft: 180,
  marginTop: 60,
  // backgroundColor: blueGrey[50],
  textAlign: 'center',
}

export default class Carts extends React.Component {
  constructor() {
    super()
    console.log(JSON.parse(window.localStorage.booklist));
    this.info = {
      books: JSON.parse(window.localStorage.booklist),
    }
  }


  renderBooks() {
    // console.log(books);

    return (
      <div class="card">
        <div class="row">
          <div class="col-md-8 cart">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4><b>Shopping Cart</b></h4>
                </div>
                {/* <div class="col align-self-center text-right text-muted">3 items</div> */}
              </div>
            </div>
            <div style={castyle}>
              <table style={castyle}>
                <thead>
                  <tr>
                    <th></th>
                    <th>Cover</th>
                    <th>Book name</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Number</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.info.books.map((item, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            <img src={item.cover} alt="" />
                          </td>
                          <td>{item.name}</td>
                          <td>{item.datas}</td>
                          <td>{formatPrice(item.price)}</td>
                          <td>
                            {/*<button onClick={() => this.changeBookCount(index, -1)} style={{ width: '15px' }}*/}
                            {/*  disabled={item.numbers == 1}>-</button>*/}
                            <>{item.numbers}</>
                            {/*<button onClick={() => this.changeBookCount(index, 1)} style={{ width: '15px' }} >+</button>*/}
                          </td>
                          <td><button onClick={() => this.removeItem(item)} style={{ width: '60px' }} > clear </button></td>

                        </tr>)
                    })
                  }
                </tbody>
              </table>
            </div>

          </div>

          <div class="col-md-4 summary">
            <div class="row" style={{ color: '#fff', padding: '2vh 0' }}>
              <h4 class="col" id="totalText" style={{ color: '#000' }} >TOTAL PRICE</h4>
              <h4 class="col text-right" style={{ color: '#000' }}  > {this.getTotalprice()}</h4>
            </div>
            <Button className="cartBtn" onClick={this.handleCheckOut}>CHECKOUT</Button>
          </div>
        </div>
      </div>
    )
  }

  renderNone() {
    return <h2>购物车为空</h2>
  }

  render() {

    var userlist = window.localStorage.userlist;
    if(userlist==null){
      window.location.href="http://localhost:3000";
      alert("请先登录！");
      return;
    }

    const { books } = this.info
    return books.length == 0 ? this.renderNone() : this.renderBooks()
  }
  changeBookCount(index, count) {
    const newBooks = [...this.info.books]
    newBooks[index].numbers += count
    this.setState({
      books: newBooks
    })
  }

  removeItem(item){
    var booklist = JSON.parse(window.localStorage.booklist);
    var newbook=booklist;
    for(var i=0;i<booklist.length;i++){
      if(booklist[i].name===item.name){
        newbook=booklist.splice(i,1);
        break;
      }
    }
    window.localStorage.booklist = JSON.stringify(newbook);
    window.location.reload();
    // window.location.href="http://localhost:3000/Home";
    // window.location.href="http://localhost:3000/Carts";
    window.localStorage.booklist = JSON.stringify(newbook);
    this.renderBooks();
  }
  getTotalprice() {
    let totalPrice = this.info.books.reduce((pre, item) => {
      return pre + item.price * item.numbers
    }, 0)
    return formatPrice(totalPrice)
  }

  removeAll(){
    var booklist = JSON.parse(window.localStorage.booklist);
    return(
            booklist= [],
            window.localStorage.booklist = JSON.stringify(booklist)
    )
  }
  handleCheckOut = e => {
    e.preventDefault();
    var ISBNList = ['1','2'];
    axios({
      method: 'GET',
      url: 'http://localhost:9092/CartCheckOut',
      params: {
        totalprice: this.getTotalprice(),
            // this.getTotalprice() ,
        // books: ISBNList,
      }
    }).then(response => {
      console.log(response)
      alert("订单确定");

    }).catch(error => {
      console.log(error)
      alert("发送失败");
    })
    this.removeAll();
    window.location.reload();
  };

}
