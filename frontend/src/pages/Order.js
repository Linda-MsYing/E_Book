import React, {useEffect, useState} from 'react';
import '../App.css';
import '../css/OrderCard.css';
// import Divider from '@material-ui/core/Divider';
import {Link, useParams} from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import { Button, Input, Select, Space, Radio,Image, Upload } from 'antd';
import axios from 'axios';
import OrderItem from '../components/OrderItem';
import CardItem from "../components/CardItem";

function Order() {

    axios({
        method: 'GET',
        url: 'http://localhost:9092/getOrder',
        params: {
            username: window.localStorage.userlist.username,
            password: window.localStorage.userlist.password,
        }
    }).then(response => {
        console.log(response)

    }).catch(error => {
        console.log(error)
        alert("fail to get orders");
    })

    let { keyword } = useParams();
    const [books, setOrders] = useState(null);
    useEffect(function effectFunction() {
        async function fetchBooks() {
            const res = await fetch("http://localhost:9092/getOrder");
            if (!res.ok) throw res;
            const json = await res.json();
            if (json.error) throw res;
            setOrders(json);
        }
        fetchBooks();
    }, []);
    var orders;
    console.log(orders);
    if (typeof keyword == "undefined")
        orders =
            books == null
                ? () => <div />
                : Object.values(books).map((i) => (
                    <OrderItem
                        id={i.orderId1}
                        price={i.totalprice1}
                        name={i.receivername1}
                        address={i.address1}
                        item1={i.bookname1}
                        item2={i.bookcount1}
                        src={i.image}
                    />
                ));
    else
        orders =
            books == null
                ? () => <div />
                : Object.values(books)
                    .filter((i) => Object.values(i).join().includes(keyword))
                    .map((i) => (
                        <OrderItem
                            id={i.id}
                            price={i.totalprice1}
                            name={i.receivername1}
                            address={i.address1}
                            item1={i.bookname1}
                            item2={i.bookcount1}
                            src={i.image}
                        />
                    ));
    if(window.localStorage.userlist==null){
        alert("请先登录！");
        window.location.href="http://localhost:3000";
        return(
            <div className="card">
                {/*<h1>My Order</h1>*/}
                {/*<SearchBox />*/}
                {orders}
            </div>
        ); ;
    };
    return (
        <div className="card">
            <h1>My Order</h1>
            <SearchBox />

                {orders}

        </div>
    );
}

export default Order;

