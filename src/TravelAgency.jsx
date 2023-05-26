import React from 'react';
import './styles.css';

export const TravelAgency = ()=>{

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-7">
            <h1 className="display-3 mt-5">Explore the wonderfull world</h1>
            <form className="row mt-5">
              <div className="col-4">
                <div className="input-group mb-3">
                  <select className="form-control form-select">
                    <option value="">Departure</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="input-group mb-3">
                  <select className="form-control form-select">
                    <option value="">Destiny</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="input-group mb-3">
                  <select className="form-control form-select">
                    <option value="">Date</option>
                  </select>
                  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-5">
            <img className="img-header mt-3" src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
          </div>       
        </div>
        <div className="row mt-5">
          <div className="col-4">
            <h2 className="display-5">Popular places</h2>
          </div>
          <div className="col-8">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Beach</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mountain</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Waterfall</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">City</a>
              </li>
            </ul>                        
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4 mt-3">
            <div className="card">
              <img src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div> 
          </div>
          <div className="col-4 mt-3">
            <div className="card">
              <img src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div> 
          </div>
          <div className="col-4 mt-3">
            <div className="card">
              <img src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div> 
          </div>
        </div>
      </div>      
    </>
  );
}