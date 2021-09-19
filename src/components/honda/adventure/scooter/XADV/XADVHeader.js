import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../header/Header.css'

export default function CrossoverHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='/'>Voltar</Link> </li>
                    <li> <Link to='XADV'>XADV</Link> </li>
                    <li> <Link to='pecas'>Peças</Link> </li>
                </ul>
            </nav>
        </header>
    )
}