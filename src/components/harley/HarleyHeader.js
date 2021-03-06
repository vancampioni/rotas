import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../header/Header.css'

export default function HarleyHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='/'>Voltar</Link> </li>
                    <li> <Link to='cruiser'>Cruiser</Link> </li>
                    <li> <Link to='grandAmericanTouring'>GrandAmericanTouring</Link> </li>
                </ul>
            </nav>
        </header>
    )
}