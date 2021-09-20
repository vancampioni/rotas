import React from 'react'
import Title from '../../title/Title.js'
import GrandAmericanTouringHeader from './GrandAmericanTouringHeader.js'

import '../../harley/Harley.css'

export default function grandAmericanTouring(props) {
    return (
        <>
        <Title texto = "Grand American Touring" />
        <GrandAmericanTouringHeader/>

        <div class="harley">
            
        </div>
        </>
    )
}