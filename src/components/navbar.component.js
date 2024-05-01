import React from 'react';
import Logo from '../images/logo.png';

export default function Navbar() {
    const links = ['Home', 'Program', 'Service', 'About', 'Community'];
    return (
        <nav>
            <div class="nav__logo">
                <a href="#"><img src={Logo} alt="logo" /></a>
            </div>
            <ul class="nav__links">
                {links.map(link => (
                    <li class="link"><a href="#">{link}</a></li>
                ))}
            </ul>
            <button class="btn">Join Now</button>
        </nav>
    )
}
