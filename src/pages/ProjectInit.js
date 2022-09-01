// import { clear } from '@testing-library/user-event/dist/clear';
// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import "../css/ProjectInit.css"

function ProjectInit(props) {
    let [sec, setSec] = useState(1);
    useEffect(() => {
        let closeTimer = setTimeout(() => {
            props.setProjectInitModalState(false);
            // props.setProjectInitModalState(true);
        }, 3 * 1000);

        let timer = setInterval(() => { setSec(sec--) }, 1000);

        return () => {
            clearTimeout(closeTimer);
            clearInterval(timer);
            setSec(1);
        }
    }, [])

    return (
        <div className='ProjectInit'>
            {/* <div className='BlackLine UpPosition' /> */}
            <p className='ProjectText'>My Project </p>
            {/* <div className='BlackLine DownPosition' /> */}


            <div className="ContainerSkip">
                <p className='SmallText SkipText' onClick={() => { props.setProjectInitModalState(false) }}>skip({sec})</p>
            </div>
        </div>

    );
}

export default ProjectInit;