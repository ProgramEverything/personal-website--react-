import React from "react";
import "./ContentCard.css";

export default class ContentCard extends React.Component {
    render() {
        return (
            <div style={{height: "80px", width: "200px", borderRadius: "5px", padding: "1px",overflow: "hidden", backgroundColor: "#fcfcfc", display: "flex", flexDirection: "row"}}>
                <div className="picBox" style={{height: "100%", width: "80px", borderRadius: "3px", overflow: "hidden"}} ref={el => this.contentCardPic = el}></div>
                <div style={{height: "100%", backgroundColor: "#fcfcfc", borderRadius: "3px", overflow: "hidden"}} ref={el => this.contentCardText = el}>
                    <div>内容</div>
                    <div>content</div>
                </div>
            </div>
        )
    }

    componentDidMount() {

    }
}