import React from 'react'
import {Link} from 'react-router-dom'

import './Header.css';

function Header() {
    return (
        <div className='Header'>
            <div className='Header-contents'>
                <p>LOGO</p>

                <Link to={`/`}>로그인</Link>
            </div>
        </div>
    )
}

export default Header
