import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Intro from './pages/Intro';
import Project from './pages/Project';
import logo from './image/logo_white.png'
import { useState } from 'react';



function App() {
  const [navbarState, setNavbarState] = useState(true);
  return (

    <div className="App">
      {
        navbarState
          ?
          <div className="ContainerNavbar">
            <Navbar>
              <Container fluid>
                <Navbar.Brand as={NavLink} to="/"><span className="Narcoker">
                  <img className="logo" src={logo} alt="logo_white.png" />
                  &nbsp;Narcoker</span></Navbar.Brand>
                <Nav className="me-auto">
                  {/* <Nav.Link as={NavLink} to="/"><span className="NavText">Home</span></Nav.Link> */}
                  <Nav.Link as={NavLink} to="/Narcoker_blog"><span className="NavText">Home</span></Nav.Link>
                  <Nav.Link as={NavLink} to="/project"><span className="NavText">Project</span></Nav.Link>
                  <span style={{ padding: "8px" }}><a href='https://velog.io/@narcoker' className="NavText" target='_blank' rel="noreferrer">Velog</a></span>
                  <span style={{ padding: "8px" }}><a href='https://github.com/Narcoker' className="NavText" target='_blank' rel="noreferrer">Github</a></span>

                </Nav>
              </Container>
            </Navbar>
          </div>
          :
          null
      }

      <div className="ContainerContent">
        <Routes>
          {/* <Route exact path="/" element={<Intro setNavbarState={setNavbarState} />} /> */}
          <Route exact path="/Narcoker_blog" element={<Intro setNavbarState={setNavbarState} />} />
          <Route path="/project" element={<Project />} />
          {/* <Route path="/:id" element={<p>찾을 수 없는 페이지 입니다.</p>} /> */}

        </Routes>
      </div>



    </div>
  );
}

export default App;
