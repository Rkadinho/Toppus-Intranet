import React from 'react'
import Home from './components/home'
import Footer from './components/footer'
import './css/App.css'
import News from './components/news'
import Images from './components/images'
import Carousel from './components/carousel'
import Navigation from './components/navigation'

function App() {
  return (
    <div className="App">
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
      </head>
      <Home />
      <Carousel />
      <Navigation />
      <News />
      <Images />
      <Footer />
    </div>
  );
}

export default App;
