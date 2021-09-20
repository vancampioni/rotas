import React from 'react'
import Title from '../../components/title/Title.js'
import YamahaHeader from './YamahaHeader.js'

import './Yamaha.css'

export default function Yamaha(props) {
    return (
        <>
        <Title texto = "Yamaha" />
        <YamahaHeader/>

        <div className="yamaha">

        </div>
        </>
    )
}