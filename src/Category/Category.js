import React, { Component } from 'react'
import CategoryItem from './CategoryItem/CategoryItem'
import "./Category.css"

export default class Category extends Component {
    state = {
        categoryItems: [
            {title: "风景", icon: "", bg: ""},
            {title: "星空", icon: "", bg: ""},
            {title: "花", icon: "", bg: ""},
            {title: "吃的", icon: "", bg: ""},
        ]
    }
    render() {
        return (
            <div>
                <section className="weShot">
                    <div className="w">
                        <div className="title">我们拍的</div>
                        <ul>
                            {
                                this.state.categoryItems.map((current) => {
                                    return (
                                        <li>
                                            <CategoryItem title={current.title} icon={current.icon} bg={current.bg}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}
