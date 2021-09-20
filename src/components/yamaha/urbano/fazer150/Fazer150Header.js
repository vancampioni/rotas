import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../header/Header.css'

export default function Fazer150Header() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='/urbano'>Voltar</Link> </li>
                </ul>
            </nav>
        </header>
    )
}