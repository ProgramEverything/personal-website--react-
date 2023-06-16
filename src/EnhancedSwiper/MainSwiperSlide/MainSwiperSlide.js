import React, { Component } from 'react'
import { SwiperSlide } from 'swiper/react'

export default class MainSwiperSlide extends Component {
    state = {
        isLoading: true,

    }
    render() {
        return (
            <SwiperSlide>
                <div className='mainSwiperSlide' style={{ width: "100%" }}>
                    <img src={this.state.isLoading ? this.props.thumb : this.props.original}
                        alt="pic"
                        style={{ width: "100%", filter: `blur(${this.state.isLoading ? "5px" : "0px"})` }} />
                    
                </div>
            </SwiperSlide>
        )
    }
}
