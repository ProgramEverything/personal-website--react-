import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import EnhancedSwiper from '../EnhancedSwiper/EnhancedSwiper'
import Category from '../Category/Category'
import "./App.css"
// import NavigatedSwiper from '../NavigatedSwiper/NavigatedSwiper'

export default class App extends Component {
  render() {
    return (
      <div className='appWrapper'>
        <Header/>
        <EnhancedSwiper/>
        <Category/>
        <Footer/>
      </div>
    )
  }
}
