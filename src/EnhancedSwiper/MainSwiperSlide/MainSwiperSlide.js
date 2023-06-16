import React, { Component } from 'react'
import { SwiperSlide } from 'swiper/react'
import Loading from "../../Loading/Loading"
import "./MainSwiperSlide.css"

const MainSwiperSlide = (isLoading, thumb, original) => {
    return (
        <SwiperSlide>
            <div className='mainSwiperSlide'>
                <img src={isLoading ? thumb : original}
                    alt="pic"
                    style={{ filter: `blur(${isLoading ? "5px" : "0px"})` }} />
                <div className="loadingWrapper">
                    <Loading />
                </div>
            </div>
        </SwiperSlide>
    )
}
export default MainSwiperSlide;
