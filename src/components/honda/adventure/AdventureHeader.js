import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../header/Header.css'

export default function AdventureHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='honda'>Voltar</Link> </li>
                    <li> <Link to='crossover'>Crossover</Link> </li>
                    <li> <Link to='scooter'>Scooter</Link> </li>
                </ul>
            </nav>
        </header>
    )
}