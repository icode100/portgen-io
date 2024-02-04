import React from 'react'
import './webd1Style.css'; 

export default function projectwebd1(props) {
  return (
    <div className='projectwebd1'>
        <div className="upper">
            <h2>{props.title}</h2>
            <p> &nbsp; &nbsp; {props.desc}</p>
        </div>
        <div className="lower">
            <a href="www.google.com">Video-Link</a>
            <a href="www.google.com">GitHub-Link</a>
        </div>
    </div>
  )
}
