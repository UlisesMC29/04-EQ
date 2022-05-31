// import React from 'react'
import '../Desktop/desktop.css'
// { <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;700display=swap" rel="stylesheet"></link> }
import imgPattern from '../../assets/bg-pattern-1.svg'
import imgPhone from '../../assets/illustration-app.png'
import iconIOS from '../../assets/icon-apple.svg'
import iconAnd from '../../assets/icon-android.svg'

export const Desktop = () => {
    return (
        <div className='principal-container'>
            <header className='header-container'>
                <h2 className='eq-header'>equalizer</h2>
                <img className='img-pattern' src={imgPattern} alt="imagen pattern" />
                <h1 className="title-header">We make your music sound extraordinary.</h1>
                <p className='txt-header'>A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!</p>
            </header>
            <body>
                <div className="content-body">
                    <img className='img-phone' src={imgPhone} alt="img phone" />
                    <div className='premium-container'>
                        <h2 className='title-pm'>Premium EQ</h2>
                        <p className='txt-pm'>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
                        <div className='price-container'>
                            <p className='txt-price'>$4</p>
                            <p className='txt-date'>/ month</p>
                        </div>
                        <div className='btn-ios'>
                            <img className='icon-ios' src={iconIOS} alt="icon iOS" />
                            <p className='iOS-btn'>iOS Download</p>
                        </div>
                        <div className='btn-android'>
                            <img className='icon-and' src={iconAnd} alt="icon android" />
                            <p className='btnAnd-container'>Android Download</p>
                        </div>
                    </div>
                </div>
                <div >
                </div>
            </body>
            <div className='footer'>
                <h2 className='eq-header'>equalizer</h2>
                <p>All rights reserved © Equalizer 2021
                    Have any problems? Contact us via social media or email us at </p>
                <p>equalizer@example.com</p>
            </div>
        </div>
    )
}
