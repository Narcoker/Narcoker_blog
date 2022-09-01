import React, { useEffect, useState } from 'react';
import '../css/Intro.css'
import profileImg from '../image/profile.jpg'
import aboutMeImg from '../image/about_me2.png'
import github from '../image/github.png'
import instagram from '../image/instagram.png'
import email from '../image/email.png'
import certificate from '../image/certificate.png'
import html from '../image/html.png'
import css from '../image/css.png'
import javascript from '../image/javascript.png'
import react from '../image/react.png'
import notion from '../image/notion.png'
import github_skill from '../image/github_black.png'
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


            <div className='Welcome'>
                <span className='Title'>⚫ WECOME TO MY PORTFOLIO ⚫</span>
                <div className='CircleBox'>
                    <img className='ProfileImg' src={profileImg} alt='profile.jpg'></img>
                </div>
                <span className='WelcomeContentText'>
                    열정, 끈기, 집념의 프론트앤드 개발자
                </span>
                <span className='WelcomeContentText'>
                    김준서 입니다.
                </span>
                <span className='IntroButton' onClick={() => { setInitModalState(true); }}>Intro</span>
            </div>

            <div className='AboutMe'>
                <span className='Title'>About Me</span>
                <div className='AboutMeContent'>
                    {/* <img className='AboutMeImg' src={aboutMeImg} alt='about_me.png'></img> */}
                    <div className='AboutMeContentText'>
                        <p>현재 영남대학교 컴퓨터공학과 4학년에 재학 중 입니다.</p>
                        <p>3학년 겨울방학 때 군대 후임으로부터 ‘학과장부 관리 및 공개 웹사이트’ </p>
                        <p>리뉴얼 개발 팀원 제의를 받아 처음으로 프론트엔드에 접하게 되었습니다.</p>
                        <p>시작할 당시 베이스가 전혀 없었고 기간이 정해져있어 빠듯했지만</p>
                        <p>팀원들과 함께 인터넷 강의와 레퍼런스를 통해 빠르게 기초 지식을 습득하고</p>
                        <p>개발 및 배포까지 했었습니다.</p>
                        <br />
                        <p>이 경험으로 인해 프론트엔드에 흥미가 생겨</p>
                        <p>지속적으로 공부 및 각종 프로젝트를 진행하고 있습니다.</p>
                        <br />
                        <p>저는 비교적 빠른 시간안에 좋은 효율을 가진 프로그램을</p>
                        <p>만들어 내는 개발자가 되려 노력하고 있습니다. </p>
                        <br />
                        <p>저는 제 스스로가 천재가 아니라고 생각합니다. </p>
                        <p>하지만 그들과 발 맞춰 걸어나가고 싶기에</p>
                        <p>열정과 끈기, 집념을 가지고 저를 단련하고 있습니다.</p>


                    </div>
                </div>
            </div>

            <div className='Skills'>
                <span className='Title'>Skills</span>
                <div className='SkillsContent'>
                    <div className='SkillContentLine'>
                        <div className='SkillBox'>
                            <img className="SkillImg" src={html} alt='html.png'></img>
                            <span className='CertificateName'>HTML</span>
                        </div>

                        <div className='SkillBox'>
                            <img className="SkillImg" src={css} alt='css.png'></img>
                            <span className='CertificateName'>CSS</span>
                        </div>
                        <div className='SkillBox'>
                            <img className="SkillImg" src={javascript} alt='javascript.png'></img>
                            <span className='CertificateName'>JavaScript</span>
                        </div>
                    </div>
                    <div className='SkillContentLine'>
                        <div className='SkillBox'>
                            <img className="SkillImg" src={react} alt='react.png'></img>
                            <span className='CertificateName'>React</span>
                        </div>
                    </div>

                    <div className='SkillContentLine'>
                        <div className='SkillBox'>
                            <img className="SkillImg" src={github_skill} alt='react.png'></img>
                            <span className='CertificateName'>Github</span>
                        </div>

                        <div className='SkillContentLine'>
                            <div className='SkillBox'>
                                <img className="SkillImg" src={notion} alt='notion.png'></img>
                                <span className='CertificateName'>Notion</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Certificate'>
                <span className='Title'>Certificate</span>
                <div className='CertificateContent'>
                    <div className='CertificateBox'>
                        <div className='CircleBox Certificate_options' style={{ marginBottom: "5px" }}>
                            <img className="CertificateImg" src={certificate} alt='certificate.png'></img>
                        </div>
                        <span className='CertificateName'>정보처리기사</span>
                    </div>
                </div>
            </div>

            <div className='Footer'>
                <span className='FooterTitle'>Connect</span>
                <div className='FooterIcons'>
                    <a href='https://www.instagram.com/bruny.js/' target='_blank' rel="noreferrer">
                        <img className='FooterIcon' src={instagram} alt='instagram.png'></img>
                    </a>
                    <a href='https://github.com/Narcoker' target='_blank' rel="noreferrer">
                        <img className='FooterIcon' src={github} alt='github.png'></img>
                    </a>
                    <a href='mailto:jykim9868@gmail.com' target='_blank' rel="noreferrer">
                        <img className='FooterIcon' src={email} alt='email.png'></img>
                    </a>
                </div>
            </div>


        </div>
    );
}

export default Intro;