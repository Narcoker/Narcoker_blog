import React from 'react';
import logo from '../image/logo_black.png'
import '../css/Project.css'
function Project(props) {
    return (
        <div className='Project'>
            <img src={logo} width="200vw" alt='logo.png' ></img>
            <div>Project 페이지 입니다.</div>
        </div>
    );
}

export default Project;