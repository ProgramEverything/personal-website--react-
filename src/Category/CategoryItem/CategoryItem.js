import React, { Component } from 'react'
import "./CategoryItem.css"

export default class CategoryItem extends Component {
    render() {
        return (
            <div className='categoryItem'>
                <img src={this.props.icon} alt="" />
                <div style={{backgroundImage: `url(${this.props.bg})`}}></div>
                <span>{this.props.title}</span>
            </div>
        )
    }
}
