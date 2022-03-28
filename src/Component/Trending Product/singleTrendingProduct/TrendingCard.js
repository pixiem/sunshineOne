import React from 'react';
import "./TrendingCard.css"
const TrendingCard = () => {
    return (
        <div className='TrendingCArd'>
            <div className='text-start'><span style={{fontSize:"14px"}}>BEEF</span></div>
            <h1 style={{fontFamily: 'Inter',width:"295",fontSize:"30px"}}>Bacon+Cheese +Green Burger</h1>
            <div className='mx-auto'>
            <img width="250px" src="./burgerVanila.jpg" alt="" />
            </div>
            <div className='d-flex'>
                <div className='w-75 text-start'>
                    <h2 style={{fontSize:"25px",fontWeight:"800",margin:"0px"}}>$6.00</h2>
                    <span style={{fontSize:"14px",fontWeight:"500"}}>220gr / 660cal</span>
                </div>
                <div className='w-25'>
                  <img width="50px" src="./plus.png" alt="" />

                </div>
            </div>
        </div>
    );
};

export default TrendingCard;