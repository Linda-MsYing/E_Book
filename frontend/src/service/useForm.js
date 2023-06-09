import React, {useState, useEffect} from 'react';
import history from '../components/history';
import {Link, withRouter} from 'react-router-dom'
import {message} from 'antd';
import axios from 'axios';


function addNewUser(value)
{
    let userlist = []
    if (window.localStorage.userlist) userlist = JSON.parse(window.localStorage.userlist);

    console.log(userlist);

    userlist.push({ username:value.username,password: value.password });
    window.localStorage.userlist = JSON.stringify(userlist);


}

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const check= () => {

        if(!values.username){
          alert("用户名为空！");
          return;
        }
        if(!values.password){
          alert("密码为空！");
          return;
        }

        // if(values.username=='123456'&&values.password=='123456'){
        //   alert("登录成功");
        //   window.location.href="http://localhost:3000/Home"
        //   return;
        // }
        //   else{
        //       alert("账号或密码错误");
        //       return;
        // }
        axios({
            method: 'GET',
            url: 'http://localhost:9092/login',
            params: {
                username: values.username,
                password: values.password,
            }
        }).then(response => {
            console.log(response)
            if (response.status === 200) {
                console.log("here");
                addNewUser(values);
                window.location.href="http://localhost:3000/Home"
            }
            else alert("账号或密码错误");
        }).catch(error => {
            console.log(error)
            console.log("登陆失败！")
            alert("登陆失败！");
            // this.$notify({
            //     title: '提示信息', message: '账号或密码错误', type: 'error'
            // })
        })

    }

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
        // console.log(e.target)
    };


    const handleSubmit = e => {
        // e.preventDefault();
        // console.log("-------------------------")
        // console.log(values.username)
        // console.log(values.password)

        check();
        // axios({
        //     method: 'GET',
        //     url: 'http://localhost:9090/checkGotoHome',
        //     params: {
        //         username: values.username,
        //         password: values.password
        //     }
        // }).then(response => {
        //     console.log(response)
        //     if (response.status === 200) {
        //         //message.success("登录成功").then(r => 0);
        //         this.router.push('/Home');
        //     }
        // }).catch(error => {
        //     console.log(error)
        //     if(Object.keys(errors).length === 0) message.success("登录成功").then(r => 0);
        //     else message.error("用户名或密码错误").then(r => -1);
        // })
        //
        // //  axios.get('http://localhost:9090/getUsers')
        // //     .then(
        // //         (response) => {
        // //     console.log(response);
        // // }
        // setErrors(validate(values));
        // setIsSubmitting(true);
    };

    // useEffect(
    //     () => {
    //         if (Object.keys(errors).length === 0 && isSubmitting) {
    //             console.log('Received values of form: ', values);
    //             //userService.login(values);
    //             callback();
    //         }
    //     },
    //     [errors]
    // );

    return {handleChange, handleSubmit, values, errors};
};

export default useForm;