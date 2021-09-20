import React from 'react'
import Title from '../../components/title/Title.js'
import SuzukiHeader from '../suzuki/SuzukiHeader'

import './Suzuki.css'

export default function Suzuki(props) {
    return (
        <>
        <Title texto = "Suzuki" />
        <SuzukiHeader/>

        <div className="suzuki">
            
        </div>
        </>
    )
}