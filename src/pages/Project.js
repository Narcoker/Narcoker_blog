import React, { useEffect, useState } from 'react';
import logo from '../image/logo_black.png'
import ProjectInit from './ProjectInit'
import '../css/Project.css'
function Project(props) {
    const [projectInitModalState, setProjectInitModalState] = useState(true);

    useEffect(() => {
        props.setNavbarState(!projectInitModalState);
    }, [projectInitModalState, props])

    return (
        <div className='Project'>
            {
                projectInitModalState
                    ? <ProjectInit setProjectInitModalState={setProjectInitModalState} />
                    : null
            }

            <img src={logo} width="200vw" alt='logo.png' ></img>
            <div>Project 페이지 입니다.</div>
        </div>
    );
}

export default Project;