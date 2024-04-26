import React from 'react'

export default function MainPgPortfolio(props) {
  
  return (
    <div>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img src={props.img} className ="mainPgPortfolio" alt="portofolio" />
      </a>
    </div>
  )
}
