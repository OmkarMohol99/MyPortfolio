
import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';
import PortfolioRoutes from './Routes';

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h6 ><Link id="navbar-elements" className="nav-link active" aria-current="page" to="/">Home</Link></h6>
              </li>
              <li className="nav-item">
                <h6 ><Link id="navbar-elements" className="nav-link active" aria-current="page" to="/about">About</Link></h6>
              </li>
              <li className="nav-item">
                <h6 ><Link id="navbar-elements" className="nav-link active" aria-current="page" to="/skills">Skills</Link></h6>
              </li>
              <li className="nav-item">
                <h6 ><Link id="navbar-elements" className="nav-link active" aria-current="page" to="/education">Education</Link></h6>
              </li>
              <li className="nav-item">
                <h6 ><Link id="navbar-elements" className="nav-link active" aria-current="page" to="/work">Work</Link></h6>
              </li>
              <li className="nav-item">
                <h6 ><Link id="navbar-elements" className="nav-link active" aria-current="page" to="/experience">Experience</Link></h6>
              </li>
              <li className="nav-item">
                <h6 ><Link id="navbar-elements" className="nav-link active" aria-current="page" to="/contact">Contact</Link></h6>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <PortfolioRoutes />
    </>
  );
};

export default App;