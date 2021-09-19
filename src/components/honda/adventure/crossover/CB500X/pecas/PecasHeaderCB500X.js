import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../../../header/Header.css'

export default function PecasHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='CB500X'>Voltar</Link> </li>
                    <li> <Link to='Pecas'>Peças</Link> </li>
                </ul>
            </nav>
        </header>
    )
}