import React, { useEffect, useState } from 'react';
import '../css/Intro.css'
import IntroInit from './IntroInit';
function Intro(props) {
    const [initModalState, setInitModalState] = useState(true);

    useEffect(() => {
        props.setNavbarState(!initModalState);
    }, [initModalState, props])

    return (
        <div className='Intro'>
            {
                initModalState
                    ? <IntroInit setInitModalState={setInitModalState} />
                    : null
            }

            <div onClick={() => { setInitModalState(true); }}>Intro</div>


        </div>
    );
}

export default Intro;