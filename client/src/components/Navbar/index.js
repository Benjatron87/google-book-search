import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
<div className="container-fluid">
    <nav className="navbar-collapse">
        <div className="row d-flex justify-content-center">
        
            <div className="page-links">
    
                <ul className="nav">

                    <li className="nav-item navLink">
                            <Link to="/" className="nav-link navLink link">Home</Link>
                    </li>
                    <li className="nav-item name">
                            <Link to="/" className="nav-link text-light link">Google Book Search</Link>
                    </li>
                    <li className="nav-item navLink">
                            <Link to="/saved" className="nav-link navLink link">Saved</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
  );
};

export default Navbar;