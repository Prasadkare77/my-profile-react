import React, { Component } from 'react'
import { NavItem } from 'react-bootstrap';

//React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealtInsurance from './HealtInsurance';

const navbar = { backgroundColor: '#F16E10' };
export class Index extends Component {
    render() {
        return (
            <div>
                {/* FontAwsome CDN Link */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <Router>
                    <Navbar style={navbar} expand="lg" className=" bg-body-ternaryk navbar-dark" data-bs-theme="primary" >
                        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                        <Navbar.Brand href='#home'>
                            <img
                                src="assets/logo-shape.png"
                                width="50"
                                height="50"
                                className="ms-5 logo d-inline-block align-top"
                                alt="CodMind Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto p-1 ps-5">
                                <NavDropdown className='ps-2 pe-2' title="Motor Insurance" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/1.1">Motor Insurance</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/1.2">Car Insurance</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/1.3">Bike Insurance</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/1.3">Motor Floater</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className='ps-2 pe-2' title="Health Insurance" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="healthInsurance">Health Insurance</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/2.2">Health AdvantEdge</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/2.3">Health Booster</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/2.4">Personal Protect</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/2.5">Arogya Sanjeevani Policy, ICICI Lombard</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/2.6">Corona Kavach Policy, ICICI Lombard</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/2.7">Saral Suraksha Bima, ICICI Lombard</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/2.8">Golden Shield</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/2.9">iShield</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className='ps-2 pe-2' title="Travel Insurance" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Travel Insurance</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Single Trip</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Gold Multi Trip</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Student Travel</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className='ps-2 pe-2' title="Business Insurance" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/4.1">Business Insurance</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.2">Marine Transit</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.3">Workmen’s Compensation</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.4">Fire Insurance - Sookshma</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.2">Marine Open Insurance</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.3">Fire Insurance - Griha for Housing Societies</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.4">Professional Indemnity Policy for Medical Practitioners</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className='ps-2 pe-2' title="Other Insurance" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/5.1">Crop Insurance</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/5.2">NRI Insurance</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/5.3">Cyber Insurance</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/5.4">ICICI Bhart Griha Raksha Policy</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/5.4">Complete Home Protect</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className='ps-2 pe-2' title="Renewals" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/6.1">All Policy Renewals</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/6.2">Car Policy</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/6.3">Bike Policy</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/6.4">Health Policy</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/6.3">Travel Policy</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/6.4">Business Insurance</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className='ps-2 pe-2' title="Claims" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/7.1">Ola Claims</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/7.2">Redbus Claims</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/7.3">Corporatr Claims</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/7.4">Mobile Claims - M-Kash</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link className='ps-5' href="/home"> Login <i class="fa fa-angle-right" aria-hidden="true"></i></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Routes>
                        <Route exact path="/healthInsurance" element={<HealtInsurance/>}></Route>
                    </Routes>
                </Router>

            </div>
        )
    }
}

export default Index

