import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css"
const CarouselSlider = () => {
    return (
        <div className='carousel-wrapper'>
            <Carousel infiniteLoop useKeyboardArrows autoPlay interval={3000} transitionTime={1000}>
                <div className='bgOne'>
                    <div className='container text-start'>
                        <span style={{ color: "white", fontSize: "20px", }}>Mega Discouts On</span> <br />
                        <span style={{ marginBottom: "100px", fontFamily: 'Nunito', fontSize: "70px", color: "#ffc800" }}>
                            Tasty Bites <br /> Healthy Foods
                        </span> <br />

                        <span style={{ fontSize: "42px", color: "white" }}>10-50% OFF</span> <br />
                        <button style={{
                            padding: "15px", backgoundColor: "white", color: "black", marginLeft: "10px",
                            marginTop: "20px", border: "none"
                        }}>VIEW DISHES</button>     </div>
                </div>
                <div className='bgTwo'>
                    <div className='container text-center'>
                        <span style={{ color: "white", fontSize: "20px", }}>Home Made Dish</span> <br />
                        <span style={{ marginBottom: "100px", fontFamily: 'Nunito', fontSize: "70px", color: "#ffc800" }}>
                            Great Dish <br /> Great Price
                        </span> <br />

                        <span style={{ fontSize: "42px", color: "white" }}>10-15% OFF</span> <br />
                        <button style={{
                            padding: "15px", backgoundColor: "white", color: "black", marginLeft: "10px",
                            marginTop: "20px", border: "none"
                        }}>VIEW DISHES</button>     </div>
                </div>

                {/* <div>
                    <img src="./imageTwo.jpg" />
                </div> */}
            </Carousel>
        </div>
    );
};

export default CarouselSlider;