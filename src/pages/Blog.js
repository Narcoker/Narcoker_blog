import React from 'react';
import logo from '../image/logo_black.png'
import '../css/Blog.css'
function Blog(props) {
    return (
        <div className='Blog'>
            <img src={logo} width="200vw" ></img>
            <div>Blog 페이지 입니다.</div>
        </div>
    );
}

export default Blog;