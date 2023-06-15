import React, { Component } from 'react'
import "./NavigatedSwiper.css"
import "./swiper-bundle"
import { Swiper } from "./swiper-bundle"
import "./swiper-bundle.css"

export default class NavigatedSwiper extends Component {
  componentDidMount = () => {
    var interleaveOffset = 0.5; //视差比值

    var swiper = new Swiper(".mySwiper", {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiperOptions = {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        speed: 1000,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        thumbs: {
            swiper: swiper,
        },
        on: {
            progress: function (swiper) {
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },
            touchStart: function (swiper) {
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },
            setTransition: function (swiper, speed) {
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                        speed + "ms";
                }
            }
        }
    };
    var swiper2 = new Swiper(".mySwiper2", swiperOptions);
  }
  render() {
    return (
      <div>
        <section className="pics">
          <div className="swiper mySwiper2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="slide-inner" style={{backgroundImage:"url(./images/discarded_factory.jpg)"}}></div>
              </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
          <div thumbsSlider="" className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="./images/discarded_factory.jpg" />
              </div>
            </div>
          </div>
          </section>
      </div>
    )
  }
}
