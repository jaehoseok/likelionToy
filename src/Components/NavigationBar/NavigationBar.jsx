import React from 'react'
import {Link} from 'react-router-dom'

import './NavigationBar.css'

function Navigation() {
    return (
        <div className='NavigationBar'>
            <div>
                <Link>육아일기</Link>
                <Link>사고팔기</Link>
                <Link>육아상식</Link>
                <Link>질의응답</Link>
            </div>
        </div>
    )
}

export default Navigation
