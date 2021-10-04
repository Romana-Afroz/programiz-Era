import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <Link className="navbar-brand" to="/">Tech-Era</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Contact Us">Contact Us</Link>
        </li>
         
      </ul> 
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
      {/* <button type="button" className="btn btn-info p-2"><Link className="nav-link active" aria-current="page" to="https://www.uplabs.com/posts/404-error-page-2a7c1c48-9828-4fd5-a95c-a13c74d8236a" >Log In</Link></button> */}
    </div>
  </div>
</nav>
        </div>
    )
}
