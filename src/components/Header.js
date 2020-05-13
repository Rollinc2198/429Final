import React from 'react'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="test" /></span>
        <h1>
        Carter Rollins
        </h1>
        <p>
            Written for Comm 429
        </p>
    </header>
)

export default Header
