import React, { Component } from 'react'
import Header from '../Header/Header'
import Category from '../Category/Category'
import Footer from '../Footer/Footer'
import Loading from '../Loading/Loading'
import EnhancedSwiper from '../EnhancedSwiper/EnhancedSwiper'
import "./App.css"
// import NavigatedSwiper from '../NavigatedSwiper/NavigatedSwiper'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <EnhancedSwiper/>
        <div className='loadingWrapper'>
          <Loading/>
        </div>
        <Category/>
        <Footer/>
      </div>
    )
  }
}
