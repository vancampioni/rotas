import React from 'react'
import Title from '../../../../components/title/Title.js'
import SportglideHeader from './SportglideHeader.js'

import '../../Harley.css'

export default function Sportglide(props) {
    return (
        <>
        <Title texto = "Sportglide" />
        <SportglideHeader/>
        <div class="harley">
            
        </div>
        </>
    )
}