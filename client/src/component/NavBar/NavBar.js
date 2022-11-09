import React, { useEffect } from 'react';
import './style.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import nav_logo from './asset/nav_logo.svg';
import nav_upload from './asset/nav_upload.svg';
import nav_alarm from './asset/nav_alarm.svg';
import nav_message from './asset/nav_message.svg';
import nav_profile from './asset/nav_profile.svg';

const NavBar = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container style={{ maxWidth: '1500px' }}>
        <Navbar.Brand style={{ marginRight: '200px' }} href="/">
          <img
            src={nav_logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-left" href="/">
              투데이
            </Nav.Link>
            <Nav.Link className="nav-left" href="search">
              검색
            </Nav.Link>
            <Nav.Link className="nav-left" href="story">
              스토리
            </Nav.Link>
            <Nav.Link className="nav-left" href="casting">
              오.캐
            </Nav.Link>
            <Nav.Link className="nav-left" href="channel">
              채널
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              className="nav-right"
              style={{ display: 'flex' }}
              href="upload"
            >
              <img
                src={nav_upload}
                width="140"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Nav.Link>
            <Nav.Link
              className="nav-right"
              style={{ display: 'flex' }}
              href="alarm"
            >
              <img
                src={nav_alarm}
                width="24"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Nav.Link>
            <Nav.Link
              className="nav-right"
              style={{ display: 'flex' }}
              href="message"
            >
              <img
                src={nav_message}
                width="24"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Nav.Link>
            <Nav.Link
              className="nav-right"
              style={{ display: 'flex' }}
              href="profile"
            >
              <img
                src={nav_profile}
                width="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
