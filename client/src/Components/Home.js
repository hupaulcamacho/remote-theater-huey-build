import React from 'react';
import { Link } from 'react-router-dom';

// important libraries import
import moment from 'moment';
import Popup from 'reactjs-popup';

// Supplemental components import
import Time from './Time';


export default function Home() {
    return (
        <div className='home-main'>
            <h1>Welcome back, User!</h1>
            <Time />
        </div>
    )
}