import React, { Component } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// thumb module
import { Thumbs } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle';
import "./EnhancedSwiper.css"

import bg from "../Category/images/sunset.jpg"

export default class EnhancedSwiper extends Component {
    state = {
        thumbsSwiper: null,
        pics: [
            "../Category/images/sunset.jpg",
            "../Category/images/sunset.jpg",
        ]
    }

    setThumbsSwiper = (obj) => {
        this.setState({
            thumbsSwiper: obj
        })
    }

    render() {
        return (
            <div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
                    thumbs={{ swiper: this.state.thumbsSwiper }}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <img src={require("../Category/images/sunset.jpg")} alt="pic" style={{width: "100%"}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={require("../Category/images/sunset.jpg")} alt="pic" style={{width: "100%"}}/>
                    </SwiperSlide>
                </Swiper>

                {/* Thumbs Swiper -> store swiper instance */}
                {/* It is also required to set watchSlidesProgress prop */}
                <div className='thumbsWrapper' style={{width: `${this.state.pics.length * 61 - 5}px`, margin: "0px auto"}}>
                    <Swiper
                        modules={[Thumbs]}
                        slidesPerView={this.state.pics.length}
                        spaceBetween={5}
                        watchSlidesProgress
                        onSwiper={this.setThumbsSwiper}
                    >
                        <SwiperSlide>
                            <div style={{ height: "50px", width: "50px", border: "1px solid black", borderRadius: "5px", padding: "2px" }}>
                                <div style={{height: "100%", 
                                width: "100%", 
                                backgroundImage: `url(${bg})`, 
                                backgroundSize: "cover", 
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                borderRadius: "3px", 
                                overflow: "hidden"}}></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{ height: "50px", width: "50px", border: "1px solid black", borderRadius: "5px", padding: "2px" }}>
                                <div style={{height: "100%", 
                                width: "100%", 
                                backgroundImage: `url(${bg})`, 
                                backgroundSize: "cover", 
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                borderRadius: "3px", 
                                overflow: "hidden"}}></div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div >
        )
    }
}
