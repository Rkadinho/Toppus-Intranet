import '../css/home.css'
import Logo from '../images/logo.png'
import React from 'react'
import Date from './date.js'

function Home(){
    return(
        <div className='Home'>
            <head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
            </head>
            <img src={Logo} className='logo'/>
            <Date />
        </div>
    )
}

export default Home