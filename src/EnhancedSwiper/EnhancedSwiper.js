import React, { Component } from 'react'
// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper } from 'swiper/react';

// thumb module
import { Thumbs } from 'swiper';

// my edition swiper-slide
import MainSwiperSlide from './MainSwiperSlide/MainSwiperSlide';
import ThumbSwiperSlide from './ThumbSwiperSlide/ThumbSwiperSlide';

// Import Swiper styles
import 'swiper/css/bundle';
import "./EnhancedSwiper.css"

export default class EnhancedSwiper extends Component {
    state = {
        thumbsSwiper: null,
        pics: [
            
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
                    modules={[Navigation, Thumbs]}
                    thumbs={{ swiper: this.state.thumbsSwiper }}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
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
                    </Swiper>
                </div>
            </div >
        )
    }
}
