import React, { Component } from 'react'
import Header from '../Header/Header'
import Category from '../Category/Category'
import Footer from '../Footer/Footer'
import "./App.css"
// import NavigatedSwiper from '../NavigatedSwiper/NavigatedSwiper'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/*<NavigatedSwiper/> 参阅React Swiper*/}
        <div className="navigatedSwiper" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div>暂不可用</div>
        </div>
        <Category/>
        <Footer/>
      </div>
    )
  }
}
