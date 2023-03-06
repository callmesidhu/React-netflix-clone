import React from 'react'
import "./Banner.css";

function Banner() {
  return (
    <div className='banner'>
          <div className='content'>
                    <h1 className='title'>Movie Name</h1>
                    <div className='banner-button'>
                              <div className='button'>Play</div>
                              <div  className='button'>My list</div>
                    </div>
                    <h1 className='description'>Download Free Icons and Stickers for your projects. Images made by and for designers in PNG, SVG, EPS, PSD and CSS formats.</h1>
          </div>
          <div className="fade-bottom"></div>
          </div>
  )
}

export default Banner
