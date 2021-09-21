import React from 'react'

import './Recommend.css'

function Recommend() {

    const Recommend_friend_form = (user) => {
        return
        <div>
            <img src={user.image}/>
            user.name
        </div>
    }

    return (
        <div className='Recommend'>
            <div>
                추천 친구
            </div>
        </div>
    )
}

export default Recommend
