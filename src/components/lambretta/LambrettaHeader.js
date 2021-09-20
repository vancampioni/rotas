import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../header/Header.css'

export default function LambrettaHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='/'>Voltar</Link> </li>
                    <li> <Link to='modeloA'>ModeloA</Link> </li>
                    <li> <Link to='modeloB'>ModeloB</Link> </li>
                </ul>
            </nav>
        </header>
    )
}