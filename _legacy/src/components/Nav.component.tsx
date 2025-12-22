import React, { memo } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../assets/css/Nav.component.css";

const KNavBar: React.FC = memo(() => {
  return (
    <>
      <div className="k-nav glass glass--tight">
        <Nav className="justify-content-center nav-underline" activeKey="/">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/" end className="nav-link">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/explore" className="nav-link">Explore</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/experience" className="nav-link">Experience</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <hr className="k-divider" />
    </>
  );
});

export default KNavBar;
