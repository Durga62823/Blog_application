import React, { useState } from 'react';
import Header from './Header';
import image1 from "../images/Head-of-Operations-and-Support-2048x1120.png";
import MainPage from './MainPage';
import Articles from './Articles';
function Homepage() {
    return (

    <div className='' style={{ backgroundImage: `url(${image1})` }}>
     <Header/>
     <MainPage/>
     <Articles/>
    </div>

    )
}

export default Homepage;
