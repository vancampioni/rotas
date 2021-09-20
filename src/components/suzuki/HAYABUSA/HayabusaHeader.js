import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../header/Header.css'

export default function HayabusaHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='/suzuki'>Voltar</Link> </li>
                    <li> <Link to='candy'>Candy</Link> </li>
                    <li> <Link to='gray'>Gray</Link> </li>
                </ul>
            </nav>
        </header>
    )
}