import React from "react";
import "./ContentCard.css";

export default class ContentCard extends React.Component {
    render() {
        return (
            <div style={{ height: "80px", width: "200px", borderRadius: "5px", padding: "1px", overflow: "hidden", backgroundColor: "#fcfcfc", display: "flex", flexDirection: "row" }}>
                <div className="picBox" style={{ height: "100%", width: "80px", borderRadius: "3px", overflow: "hidden" }}></div>
                <div style={{ height: "100%", width: "120px", backgroundColor: "#fcfcfc", borderRadius: "3px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                    <div style={{ height: "40px", display: "flex", alignItems: "center", fontSize: "20px" }}>
                        <span>
                            学习
                        </span>
                    </div>
                    <div style={{color: "#c0c0c0", fontSize: "12px"}}>主要是一些练习代码和项目</div>
                </div>
            </div>
        )
    }
}