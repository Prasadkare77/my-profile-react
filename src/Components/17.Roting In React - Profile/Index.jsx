import React, { Component } from 'react'

// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// React Router DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Home from './Home';
import TechStack from './TechStack';
import Education from './Education';
import Project from './Project';
import Personal from './Personal';

class Index extends Component {
    render() {
        return (
            <Router>
                <Navbar expand="lg" className="bg-body-tertiary bg-dark">
                    <Container>
                        <Navbar.Brand href="/home">Prasad Kare</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/home">Home</Nav.Link>
                                <Nav.Link href="/techStack">Technology Stack</Nav.Link>
                                <Nav.Link href="/education">Education</Nav.Link>
                                <Nav.Link href="/project">Project</Nav.Link>
                                <Nav.Link href="/personal">Personal</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route exact path="/home" element={<Home/>}></Route>
                    <Route exact path="/techStack" element={<TechStack/>}></Route>
                    <Route exact path="/education" element={<Education/>}></Route>
                    <Route exact path="/project" element={<Project/>}></Route>
                    <Route exact path="/personal" element={<Personal/>}></Route>
                </Routes>

            </Router>
        );
    }

}

export default Index;