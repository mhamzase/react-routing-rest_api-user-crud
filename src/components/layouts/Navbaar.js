import React, { useState } from "react";
import {Navbar,Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";

function Navbaar() {
  const [homeActive, setHomeActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const handleHomeLink = () => {
    setHomeActive(true);

    setAboutActive(false);
    setContactActive(false);

  };
  const handleAboutLink = () => {
    setAboutActive(true);

    setHomeActive(false);
    setContactActive(false);
  };
  const handleContactLink = () => {
    setContactActive(true);

    setHomeActive(false);
    setAboutActive(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <FaReact style={{color:'#2089DA',fontSize:'60px'}}/>
      <Nav className="mr-auto m-3">
        <Link className={`navlink ${homeActive ? "active" : ""}`} onClick={handleHomeLink}  to="/" >
          Home
        </Link>
        <Link className={`navlink ${aboutActive ? "active" : ""}`} onClick={handleAboutLink}  to="/about"
>
          About
        </Link>
        <Link className={`navlink ${contactActive ? "active" : ""}`} onClick={handleContactLink} to="/contact">
          Contact
        </Link>
      </Nav>

      <Link className="btn btn-outline-info" to="/add-user">Add New User</Link>
    </Navbar>
  );
}

export default Navbaar;
