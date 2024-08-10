import React, { memo } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../assets/css/Nav.component.css";

const KNavBar: React.FC = memo(() => {
  return (
    <>
      <Nav className="justify-content-start" activeKey="/home" style={{ paddingTop: "1rem", paddingLeft: "1rem" }}>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
        </Nav.Item>
      </Nav>
      <hr />
    </>
  );
});

export default KNavBar;
