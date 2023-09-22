import React from "react";
import ReactDOM from "react-dom"
import IndexBackGround from "./IndexBackgroud/IndexBackground";
import ContentCard from "./ContentCard/ContentCard";

ReactDOM.render(
    <>
        <div style={{width: "80%", height: "100%", border: "1px solid black", boxSizing: "border-box", margin: "0px auto"}}>
            <ContentCard picUrl={"/src/pic/learning.png"}/>
        </div>
        <IndexBackGround/>
    </>,
    document.querySelector("#app")
)