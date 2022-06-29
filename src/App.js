import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Intro from './pages/Intro'
import Project from './pages/Project';
import Blog from './pages/Blog';
import Login from './pages/Login';

function App() {
  return (

    <div className="App">
      <div className='Container-Navbar'>
        <Navbar variant="light">
          <Container fluid>
            <Navbar.Brand href="#intro"><span className='Font-NotoSans white'>Narcoker_Frontend Developer</span></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/"><span className='Font-NotoSans white'>Intro</span></Nav.Link>
              <Nav.Link as={Link} to="/project"><span className='Font-NotoSans white'>Project</span></Nav.Link>
              <Nav.Link as={Link} to="/blog"><span className='Font-NotoSans white'>Blog</span></Nav.Link>
              <Nav.Link as={Link} to="/login"><span className='Font-NotoSans white'>Login</span></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div className='Container-Content'>
        <Routes>
          <Route exact path="/" element={<Intro></Intro>} />
          <Route path="/project" element={<Project></Project>} />
          <Route path="/blog" element={<Blog></Blog>} />
          <Route path="/login" element={<Login></Login>} />
          {/* <Route path='/:id'><p>정해진 경로 외의 페이지입니다.</p> </Route> */}

        </Routes>
      </div>

      <div className='Container-footer'>

      </div>

    </div>
  );
}

export default App;
