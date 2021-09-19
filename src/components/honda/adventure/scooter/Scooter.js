import React from 'react'
import Title from '../../../../components/title/Title.js'
import ScooterHeader from './ScooterHeader'

import '../../Honda.css'

export default function Scooter(props) {
    return (
        <>
        <Title texto = "Scooter" />
        <ScooterHeader/>

        <div className="scooter">
            
        </div>
        </>
    )
}