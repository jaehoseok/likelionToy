import React, {useState} from 'react'
import {Link} from 'react-router-dom';

import './Login.css';

function Login(props) {

    const [ID, setID] = useState()
    const [PASSWORD, setPASSWORD] = useState()

    const handleLogin = () => {
        console.log('ID :',ID);
        console.log('PASSWOD :',PASSWORD);
        props.history.push('/LandingPage')
    }

    return (
        <div className='Login'>
            <div>
                <div><input type='text' placeholder='ID' onChange={(e) => setID(e.target.value)}/></div>
                <div><input type='password' placeholder='PASSWORD' onChange={(e) => setPASSWORD(e.target.value)}/></div>
                <div><button className='Login-btn' onClick={handleLogin}>로그인</button></div>
                <div className='login-tool'><Link to={`/`}>비밀번호찾기</Link> <p>|</p> <Link to={`/Register`}>회원가입</Link></div>
            </div>
        </div>
    )
}

export default Login
