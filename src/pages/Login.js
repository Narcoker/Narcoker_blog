import React from 'react';
import '../css/Login.css'
import logo from '../image/logo_black.png'
function Login(props) {
    return (
        <div className='Login'>
            <img src={logo} width="200vw" ></img>
            <div>Login 페이지 입니다.</div>
        </div>
    );
}

export default Login;