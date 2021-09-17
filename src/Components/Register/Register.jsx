import React, {useState} from 'react'

import './Register.css';

function Register(props) {

    const [ID, setID] = useState()
    const [PASSWORD, setPASSWORD] = useState()
    const [RePASSWORD, setRePASSWORD] = useState()
    const [NAME, setNAME] = useState()

    const handleRegister = () => {
        console.log('ID : ', ID);
        console.log('PASSWORd : ', PASSWORD);
        console.log('RE-PASSWORD : ', RePASSWORD);
        console.log('NAME : ', NAME);

        props.history.push('/')
    }
    
    return (
        <div className='Register'>
            <div>
                <p>아이디</p>
                <div><input type='text' onChange={(e) => setID(e.target.value)}/></div>

                <p>비밀번호</p>
                <div><input type='password' onChange={(e) => setPASSWORD(e.target.value)}/></div>

                <p>비밀번호 재확인</p>
                <div><input type='password' onChange={(e) => {setRePASSWORD(e.target.value)}}/></div>
                {PASSWORD === RePASSWORD ? <p className='password-msg'/>:<p className='password-msg'>비밀번호가 다릅니다.</p>}

                <p>이름</p>
                <div><input type='text' onChange={(e) => setNAME(e.target.value)}/></div>

                <button className='Register-btn' onClick={handleRegister}>회원가입</button>
            </div>
        </div>
    )
}

export default Register
