import React, { useState } from 'react';
import {UploadOutlined, UserOutlined} from '@ant-design/icons';
import { Button, Input, Select, Space, Radio,Image, Upload } from 'antd';
import '../css/Cart.css';

const { TextArea } = Input;
const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
    },
    {
        value: 'Shanghai',
        label: 'Shanghai',
    },
];



function User() {
    var userlist = window.localStorage.userlist;
    if(userlist==null){
        window.location.href="http://localhost:3000";
        alert("请先登录！");
        return;
    }

    return (
        <>
            <h1><b>My Profile</b></h1>
            <div className='cards__container'>
            <Space direction="vertical" size="middle">
                <h3><b>Avator</b></h3>
                <Space.Compact>
                <Image height={400} width={350} src='images/userphoto.png' />
                </Space.Compact>
                <Space.Compact>
                <Upload>
                    <Button>
                        <UploadOutlined /> Click to Upload
                    </Button>
                </Upload>
                </Space.Compact>
                <h3><b>Name</b></h3>
                <Space.Compact>
                    <Input style={{ width: 350 }} defaultValue="Tom" />
                </Space.Compact>
                <h3><b>Phone Numble</b></h3>
                <Space.Compact>
                    <Input style={{ width: 100 }} defaultValue="+86" />
                    <Input style={{ width: 250 }} defaultValue="15877480976" />
                </Space.Compact>

                <h3><b>Address</b></h3>
                <Space.Compact>
                    <Select style={{ width: 100 }} defaultValue="Shanghai" options={options} />
                    <Input style={{ width: 250 }} defaultValue="Minhang" />
                </Space.Compact>
                <h3><b>gender</b></h3>
                <Space.Compact>
                    <Radio.Group>
                        <Space direction="vertical">
                            <Radio value={1}>Male</Radio>
                            <Radio value={2}>Female</Radio>
                            <Radio value={3}>Don't want to talk</Radio>
                        </Space>
                    </Radio.Group>
                </Space.Compact>
            </Space>
            </div>

            <div className='cards__container'>
            <h3><b>Note</b></h3>
            <TextArea style={{ width: 700 }} rows={5} defaultValue="This is a naughty cat"  />
            </div>
            <div className='cards__container'>
            <Button
                style={{ width: 350 }}
                // style={{ marginRight: -20 }}
                size="large"
                type="Primary"
            >
                Save »
            </Button>
            <Button
                style={{ width: 350 }}
                // style={{ marginRight: -20 }}
                size="large"
                type="Primary"
            >
                Cancel »
            </Button>
            </div>
        </>


    );
}

export default User;