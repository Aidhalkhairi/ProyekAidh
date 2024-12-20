import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', background: '#282c34', color: 'white' }}>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
                <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
                <li><Link to="/gallery" style={{ color: 'white', textDecoration: 'none' }}>Gallery</Link></li>
                <li><Link to="/map" style={{ color: 'white', textDecoration: 'none' }}>Map</Link></li>
                <li><Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link></li>
                <li><Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
