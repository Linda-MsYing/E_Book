import React from 'react';
import '../App.css';
import '../css/OrderCard.css';
// import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import { Button, Input, Select, Space, Radio,Image, Upload } from 'antd';
import axios from 'axios';

function OrderItem(props) {

    return (
        <div className="card-text">

                <div className="portada">
                    <img src={props.src} alt="Nature" style={{ width: '75%' }} />
                </div>

            <div className="title-total">
                <h3>Order:  {props.id} </h3>
                <h4>receiver:  {props.name}</h4>
                <h4>address:  {props.address}</h4>
                <h4 className="orderPrice"> ${props.price}</h4>
                <h3>Items </h3>
                <h4>bookname:  {props.item1} </h4>
                <h4>booknumble:  {props.item2}</h4>

                <div className="actions">
                    <Button>Confirm the goods</Button>
                    {/*<Button>refund</Button>*/}
                    <Button>check logistics</Button>
                </div>
            </div>
        </div>



    );
}

export default OrderItem;

