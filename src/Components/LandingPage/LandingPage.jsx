import React from 'react'

import './LandingPage.css'
import NavigationBar from '../NavigationBar/NavigationBar'
import Recommend from '../Recommend/Recommend'

function LandingPage() {
    return (
        <div className='LandingPage'>
            <NavigationBar/>
            <Recommend/>
            <div className='LandingPage-content'>
                피드가 들어옴
            </div>
        </div>
    )
}

export default LandingPage