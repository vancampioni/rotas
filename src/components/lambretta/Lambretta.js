import React from 'react'
import Title from '../../components/title/Title.js'
import LambrettaHeader from '../lambretta/LambrettaHeader'

import './Lambretta.css'

export default function Lambretta(props) {
    return (
        <>
        <Title texto = "Lambretta" />
        <LambrettaHeader/>

        <div className="lambretta">
            
        </div>
        </>
    )
}