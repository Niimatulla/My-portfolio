import React from 'react';
import logo from "../components/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";

 const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
 <div className="container">
 <a className="navbar-brand" href="#"> <img src={logo} alt="logo..." className='logo' /> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    {/* <span className="navbar-toggler-icon"></span> */}
    <FontAwesomeIcon icon={faBars} />
  </button>

  <div className="collapse navbar-collapse justify-content-end"  id="navbarSupportedContent">
    <ul className="navbar-nav  ml-auto">
      <li className="nav-item active">
        <a className="nav-link " href="#"> <FontAwesomeIcon icon={faHome} />Home <span class="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">about me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">how work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">contact</a>
      </li>
     
    </ul>
   
  </div>
 </div>
</nav>
    </div>
  )
};
export default Nav;

