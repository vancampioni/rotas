import React from 'react'
import Title from '../../../components/title/Title.js'
import ModeloAHeader from './ModeloAHeader'

import '../Lambretta.css'

export default function ModeloB(props) {
    return (
        <>
        <Title texto = "ModeloA" />
        <ModeloAHeader/>

        <div className="lambretta">
            
        </div>
        </>
    )
}