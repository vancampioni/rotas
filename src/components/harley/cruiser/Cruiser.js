import React from 'react'
import Title from '../../../components/title/Title.js'
import CruiserHeader from './CruiserHeader.js'

import '../../harley/Harley.css'

export default function Cruiser(props) {
    return (
        <>
        <Title texto = "Cruiser" />
        <CruiserHeader/>

        <div class="harley">
            
        </div>
        </>
    )
}