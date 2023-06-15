import React, { Component } from 'react'
import "./Category.css"

export default class Category extends Component {
    render() {
        return (
            <div>
                <section className="weShot">
                    <div className="w">
                        <div className="title">我们拍的</div>
                        <ul>
                            <li>
                                <img src="./images/landscape.png" alt="" />
                                <div></div>
                                <span>风景</span>
                            </li>
                            <li>
                                <img src="./images/shooting_star.png" alt="" />
                                <div></div>
                                <span>星空</span>
                            </li>
                            <li>
                                <img src="./images/flowers.png" alt="" />
                                <div></div>
                                <span>花</span>
                            </li>
                            <li>
                                <img src="./images/food.png" alt="" />
                                <div></div>
                                <span>吃的</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}
