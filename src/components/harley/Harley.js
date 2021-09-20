import React from 'react'
import Title from '../../components/title/Title.js'
import HarleyHeader from '../harley/HarleyHeader'

import './Harley.css'

export default function Harley(props) {
    return (
        <>
        <Title texto = "Harley Davidson" />
        <HarleyHeader/>

        <div className="harley">
            
        </div>
        </>
    )
}