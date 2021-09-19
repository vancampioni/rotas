import React from 'react'

import './Title.css'

export default function Title(props) {
    return (
       <div className="title">
           <h3>{props.texto}</h3>
       </div>
    )
}