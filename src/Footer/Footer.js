import React, { Component } from 'react'
import "./Footer.css"

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
        <div className="w">
            <dl className="aboutUs">
                <dt><strong>关注我们</strong></dt>
                <dl>
                    <ul>
                        <li><img src={require("./images/images.png")} alt="weiXinIcon"/>不存在的微信公众号</li>
                        <li><img src={require("./images/XiaohongshuLOGO.png")} alt="xiaoHongShuIcon"/>不存在的小红书号</li>
                        <li><img src={require("./images/408769.png")} alt="weiBoIcon"/>不存在的微博</li>
                    </ul>
                </dl>
            </dl>
            <div className="splitLine"></div>
            <a className="beiAnLink" href="http://www.beian.gov.cn/portal/registerSystemInfo">
                <img className="ali-report-img" src={require("./images/badge.png")}/>
                <span className="ali-report-link-text">浙ICP备2023013970号-1</span>
            </a>
        </div>
    </footer>
      </div>
    )
  }
}
