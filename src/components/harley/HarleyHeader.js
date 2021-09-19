import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Header/Header.css'

export default function HarleyHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='/'>Voltar</Link> </li>
                    <li> <Link to='cruiser'>Cruiser</Link> </li>
                    <li> <Link to='grandAmericanTouring'>grandAmericanTouring</Link> </li>
                </ul>
            </nav>
        </header>
    )
}