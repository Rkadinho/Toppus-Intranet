import React from 'react'
import Approvers from './components/approversTable'
import Home from './components/home'
import Footer from './components/footer'
import News from './components/news'
import Navigation from './components/navigation'
import Images from './components/images'

function Emails(){
    return(
        <div className='emails'>
            <head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
            </head>
            <Home />
            <Approvers />
            <Navigation />
            <News />
            <Images />
            <Footer />
        </div>
    )  
}

export default Emails