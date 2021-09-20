import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../header/Header.css'

export default function Lambretta125M() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='modeloA'>Voltar</Link> </li>
                </ul>
            </nav>
        </header>
    )
}