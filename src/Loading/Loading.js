import React, { Component } from 'react'
import "./Loading.css"

export default class Loading extends Component {
  state = {
    rotate: 360
  }
  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        rotate: this.state.rotate > 0 ? this.state.rotate - 30 : 330
      })
    }, 100)
  }
  render() {
    return (
      <div className='loading'>
        <div className='anchor' ref={"anchor"} style={{transform: `translateX(-50%) translateY(-50%) rotate(${this.state.rotate}deg) `}}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
      </div>
    )
  }
}
