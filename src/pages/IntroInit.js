// import { clear } from '@testing-library/user-event/dist/clear';
// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import "../css/IntroInit.css"

function IntroInit(props) {
    let [sec, setSec] = useState(9);
    useEffect(() => {
        let closeTimer = setTimeout(() => {
            props.setInitModalState(false);
        }, 11 * 1000);

        let timer = setInterval(() => { setSec(sec--) }, 1000);

        return () => {
            clearTimeout(closeTimer);
            clearInterval(timer);
            setSec(9);
        }
    }, [])

    return (
        <div className={`IntroInit`}>
            <div className='ContainerHello'>

                <p className={`BigText FontNotoSans`}>안녕하세요</p>

            </div>
            <div className='ContainerCharms'>

                <span className='Passion BigText'> 열정,&nbsp;</span>
                <span className='Patience BigText'>끈기,&nbsp;</span>
                <span className='Tenacity BigText'>집념&nbsp;</span>
                <span className='Tenacity SmallText'>으로</span>

            </div>

            <div className='ContainerChallenge'>
                <p className='BigText'> 새로운 도전에 임하는</p>
            </div>

            <div className='ContainerFD'>
                <p className='BigText'>Frontend Developer&nbsp;</p>
                <p>
                    <span className='MiddleText'>김준서&nbsp;</span>
                    <span className='SmallText'>입니다.</span>
                </p>
            </div>

            <div className="ContainerSkip">
                <p className='SmallText SkipText' onClick={() => { props.setInitModalState(false) }}>skip({sec})</p>
            </div>


        </div>
    );
}

export default IntroInit;