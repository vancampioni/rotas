import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../header/Header.css'

export default function Honda() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='/'>Voltar</Link> </li>
                    <li> <Link to='adventure'>Adventure</Link> </li>
                    <li> <Link to='street'>Street</Link> </li>
                </ul>
            </nav>
        </header>
    )
}