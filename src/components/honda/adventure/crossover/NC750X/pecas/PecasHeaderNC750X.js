import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../../../header/Header.css'

export default function PecasHeaderNC750X() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='NC750X'>Voltar</Link> </li>
                </ul>
            </nav>
        </header>
    )
}