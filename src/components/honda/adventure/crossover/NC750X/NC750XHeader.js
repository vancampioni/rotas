import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../../header/Header.css'

export default function NC750XHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='crossover'>Voltar</Link> </li>
                    <li> <Link to='Pecas'>Peças</Link> </li>
                </ul>
            </nav>
        </header>
    )
}