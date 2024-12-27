// import React, { useState } from 'react';
import Header from './Header';
// import image1 from "../images/Head-of-Operations-and-Support-2048x1120.png";
import MainPage from './MainPage';
import Articles from './Articles';
import CTA from './CTA';
function Homepage() {
    return (

    <div className=''>
     <Header/>
     <div className='p-2'>
     <MainPage/>
     <Articles/>
     </div>
     <CTA/>
    </div>

    )
}

export default Homepage;
