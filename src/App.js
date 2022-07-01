import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Intro from './pages/Intro';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Login from './pages/Login';
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
            <Navbar bg="#262626" variant="light">
              <Container fluid>
                <Navbar.Brand as={NavLink} to="/"><span className="FontNotoSans ColorWhite">
                  <img src={logo} width="20px" height="24px" />
                  &nbsp;Narcoker</span></Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/"><span className="NavText">Intro</span></Nav.Link>
                  <Nav.Link as={NavLink} to="/project"><span className="NavText">Project</span></Nav.Link>
                  <Nav.Link as={NavLink} to="/blog"><span className="NavText">Blog</span></Nav.Link>
                  <Nav.Link as={NavLink} to="/login"><span className="NavText">Login</span></Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </div>
          :
          null

      }


      <div className="ContainerContent">
        <Routes>
          <Route exact path="/" element={<Intro setNavbarState={setNavbarState} />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:id" element={<p>찾을 수 없는 페이지 입니다.</p>} />

        </Routes>
      </div>

      <div className="Container-footer" />

    </div>
  );
}

export default App;
