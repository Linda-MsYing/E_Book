import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
// import Footer from '../components/Footer';
// import  Pagination from '../components/Pagination';

function addNewUser(value)
{
    var userlist = JSON.parse(window.localStorage.userlist);
    return(
        console.log(userlist),
            userlist.push({ username:value.username,password: value.password }),
            window.localStorage.userlist = JSON.stringify(userlist)

    )
};
function Home() {
    var userlist = window.localStorage.userlist;
    if(userlist==null){
        window.location.href="http://localhost:3000";
        alert("请先登录！");
        return;
    }
    console.log(userlist)
  return (

    <>
      <HeroSection />
      <Cards />
      {/*<Footer />*/}
      {/*<Pagination />*/}
    </>
  );
}

export default Home;
