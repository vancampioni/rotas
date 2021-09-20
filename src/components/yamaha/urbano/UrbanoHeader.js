import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../header/Header.css'

export default function UrbanoHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='/yamaha'>Voltar</Link> </li>
                    <li> <Link to='factor125'>Factor125</Link> </li>
                    <li> <Link to='fazer150'>Fazer150</Link> </li>
                </ul>
            </nav>
        </header>
    )
}