import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../header/Header.css'

export default function SuzukiHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='/'>Voltar</Link> </li>
                    <li> <Link to='hayabusa'>Hayabusa</Link> </li>
                </ul>
            </nav>
        </header>
    )
}