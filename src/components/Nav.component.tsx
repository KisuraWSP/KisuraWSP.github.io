import React, { memo } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../assets/css/Nav.component.css";

const KNavBar: React.FC = memo(() => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home" style={{ paddingTop: "1rem", paddingLeft: "1rem", fontSize: "2.5rem" }}>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        </Nav.Item>
        {/*
        <Nav.Item>
          <Nav.Link as={NavLink} to="/games">Games</Nav.Link>
        </Nav.Item>
        */}
      </Nav>
      <hr />
    </>
  );
});

export default KNavBar;
