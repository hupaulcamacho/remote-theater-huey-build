import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'

export default function LandingPage() {
    return (
        <div className='landingpage-main'>
            <img className='logo' src={logo} height='350px' alt='logo' />
            <h1>Remote Theater</h1>
            <Link to='/home'>
                Enter
            </Link>
        </div>
    )
}