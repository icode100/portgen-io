import React from 'react'
import Portfolio from "./MainPgPortfolio.jsx";
import "../style.css";

export default function MainPgPortCatSet(props) {
    let components = [];
    let images = props.images;
    let urls = props.url;
    for(let i = 0; i < props.images.length; i++) {
        components.push(<Portfolio key={i} img={images[i]} url={urls[i]}/>);
    }
    // console.log(props.images);
    return (
        <div className = "MainPgPortCatSet">
            <p>{props.title}</p>
            <div>
                {components}
            </div>
        </div>
    )
}
