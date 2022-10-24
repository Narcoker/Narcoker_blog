import React, { useEffect, useState } from 'react';
import logo from '../image/logo_black.png';
import ProjectInit from './ProjectInit';
import '../css/Project.css';
import { projects } from '../projectData/data';
import axios from 'axios';


function Project(props) {
    const [projectInitModalState, setProjectInitModalState] = useState(true);
    const url = "../image/logo_black.png"
    useEffect(() => {
        props.setNavbarState(!projectInitModalState);
    }, [projectInitModalState, props])

    console.log(projects[0].images[0]);

    const getAPI = () => {
        // fetch('https://d963-218-54-93-145.jp.ngrok.io/', { headers })
        //   .then(res => res.json())
        //   .then(res => {
        //     console.log(res);
        //   })
        try {
            const response = axios.get('https://d963-218-54-93-145.jp.ngrok.io/');
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='Project'>
            {
                projectInitModalState
                    ? <ProjectInit setProjectInitModalState={setProjectInitModalState} />
                    : null
            }

            <img src={logo} width="200vw" alt='logo.png' ></img>
            <div>Project 페이지 입니다.</div>
            <div>{projects[0].name}</div>
            {/* <img src={projects[0].images[0]} alt="" width={"200px"}></img> */}
            <button onClick={getAPI}>asdf</button>


        </div>
    );
}

export default Project;