import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand" >Travel Agency</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/'} className="nav-link active" aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin'} className="nav-link active" aria-current="page" href="#">Administrador</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-success me-2">Create acount</button>
            <button className="btn btn-outline-success" type="submit">Login</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
