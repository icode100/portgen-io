import React from 'react'

export default function education(props) {
  return (
    <div className='education-'>
        <p>{props.class} &nbsp; {props.clg} </p>
        <p>{props.gpa}</p>
    </div>
  )
}
