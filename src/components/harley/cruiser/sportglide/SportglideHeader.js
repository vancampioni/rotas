import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../Header/Header.css'

export default function SportglideHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='cruiser'>Voltar</Link> </li>
                </ul>
            </nav>
        </header>
    )
}