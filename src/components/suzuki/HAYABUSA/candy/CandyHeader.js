import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../header/Header.css'

export default function CandyHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='/hayabusa'>Voltar</Link> </li>
                </ul>
            </nav>
        </header>
    )
}