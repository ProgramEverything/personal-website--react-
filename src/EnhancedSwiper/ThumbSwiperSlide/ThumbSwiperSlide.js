import React from 'react'
import { SwiperSlide } from 'swiper/react'

const ThumbSwiperSlide = (bg) => {
    return (
        <SwiperSlide>
            <div style={{ height: "50px", width: "50px", border: "1px solid black", borderRadius: "5px", padding: "2px" }}>
                <div style={{
                    height: "100%",
                    width: "100%",
                    backgroundImage: `url("${bg}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: "3px",
                    overflow: "hidden"
                }}></div>
            </div>
        </SwiperSlide>
    )
}
export default ThumbSwiperSlide;
