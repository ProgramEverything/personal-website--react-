import React, { Component } from 'react'
import "./Header.css"

export default class Header extends Component {
  render() {
    return (
      <div className="header">
          <nav className="w navBar">
              <h1>
                  <a href="index.html"></a>
              </h1>
              <ul>
                  <li><a href="#">Home page</a></li>
                  <li><a href="#">Bear's page</a></li>
                  <li><a href="#">Boat's page</a></li>
                  <li><a href="#">Boot's page</a></li>
                  <li><a href="#">Coat's page</a></li>
              </ul>
              <div className="search">
                  <form action="">
                      <input type="text" placeholder="想搜索的内容"/>
                      <input type="submit" value="&#xe986;"/>
                  </form>
              </div>
          </nav>
      </div>
    )
  }
}
