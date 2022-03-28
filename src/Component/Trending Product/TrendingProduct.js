import React from 'react';
import "./TrendingPoduct.css"
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import TrendingCard from './singleTrendingProduct/TrendingCard';
const TrendingProduct = () => {
    return (
        <div className='trendingSec'>
            <h1 style={{fontFamily: 'Rakkas',paddingTop:"30px",color:"#f5e7c1",fontSize:"58px"}}>Bestsellers</h1>
            <Carousel
                plugins={[
                    'infinite',
                    'arrows',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 2
                        }
                    },
                ]}
            >
                <div className='d-flex '>
               <TrendingCard></TrendingCard>
               <TrendingCard></TrendingCard>
                

                </div>
                <div className='d-flex'>
                <TrendingCard></TrendingCard>
                <TrendingCard></TrendingCard>
                </div>
                <div className='d-flex'>
                <TrendingCard></TrendingCard>
                <TrendingCard></TrendingCard>
                </div>
            </Carousel>
        </div>
    );
};

export default TrendingProduct;