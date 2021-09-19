import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../header/Header.css'

export default function CrossoverHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='adventure'>Voltar</Link> </li>
                    <li> <Link to='CB500X'>CB500X</Link> </li>
                    <li> <Link to='NC750X'>NC750X</Link> </li>
                </ul>
            </nav>
        </header>
    )
}