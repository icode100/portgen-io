import React from 'react'

export default function company(props) {
  return (
    <div className='company' >
        <h3>{props.title}</h3>
        <p> &nbsp; &nbsp;{props.desc}</p>
    </div>
  )
}
