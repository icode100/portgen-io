import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function skillsLoader(props) {
  return (
    <div className='skillClass'>
        <p>{props.title}</p>
        <div>
        <CircularProgressbar value = {props.value} styles={{
            trail : {
                stroke : "white",
            },
            background : {
                fill: 'black',
            },
            pathColor: `rgba(62, 152, 199, 1)`,
        }}/>
        </div>
    </div>
  )
}
