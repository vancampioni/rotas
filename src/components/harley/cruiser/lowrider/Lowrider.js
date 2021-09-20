import React from 'react'
import Title from '../../../../components/title/Title.js'
import LowriderHeader from './LowriderHeader.js'

import '../../Harley.css'

export default function Lowrider(props) {
    return (
        <>
        <Title texto = "Lowrider" />
        <LowriderHeader/>

        <div class="harley">
            
        </div>
        </>
    )
}