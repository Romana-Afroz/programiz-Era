import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';
export default function Footer() {
    return (
        <div>
           <div className="main-footer"></div>


<div className="container-footer">
  <footer className="py-5 ps-5">
    <div className="row">
      <div className="col-2">
        <h5>Company</h5>

        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/Home" className="nav-link p-0 text">About</Link></li>
          <li className="nav-item mb-2"><Link to="/Featurs" className="nav-link p-0 text">Advertising</Link></li>
          <li className="nav-item mb-2"><Link to="/Pricing" className="nav-link p-0 text">Privacy Policy</Link></li>
          <li className="nav-item mb-2"><Link to="/FAQs" className="nav-link p-0 text">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to="/About" className="nav-link p-0 text">Terms & Conditions</Link></li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Tutorial</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/Home" className="nav-link p-0 text">ML Tutoraial</Link></li>
          <li className="nav-item mb-2"><Link to="/Features" className="nav-link p-0 text">DSA Tutorial</Link></li>
          <li className="nav-item mb-2"><Link to="/Pricing" className="nav-link p-0 text">Python 3 Tutorial</Link></li>
          <li className="nav-item mb-2"><Link to="/FAQs" className="nav-link p-0 text">Swift Tutorial</Link></li>
          <li className="nav-item mb-2"><Link to="/About" className="nav-link p-0 text">Dark Web Tutorial</Link></li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Apps</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/Home" className="nav-link p-0 text-muted">Learn Python</Link></li>
          <li className="nav-item mb-2"><Link to="/Features" className="nav-link p-0 text-muted">Learn Machine Learning</Link></li>
          <li className="nav-item mb-2"><Link to="/Pricing" className="nav-link p-0 text-muted">Learning AI</Link></li>
          <li className="nav-item mb-2"><Link to="/FAQs" className="nav-link p-0 text-muted">Learning Ruby </Link></li>
          <li className="nav-item mb-2"><Link to="/About" className="nav-link p-0 text-muted">Learning Data Science</Link></li>
        </ul>
      </div>

      <div className="col-4 offset-1 ps-4">
    
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"></input>
            <button className="btn btn-dark" type="button">Subscribe</button>
          </div>
        
      </div>
    </div>

    <div className="d-flex justify-content-between ps-2 border-top ">
      <p>&copy; 2021, Inc. All rights reserved by Romana Afroz.</p>
    </div>
  </footer>
</div>
   </div>
    )
}
