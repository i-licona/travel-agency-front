import React from 'react';
import './styles.css';
import { Navbar } from './components/main/Navbar';

export const TravelAgency = ()=>{

  return (
    <>
      <Navbar/>
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
                <h5 className="card-title">La boquilla beach</h5>
                <p><i class="fa-solid fa-location-dot"></i> <small class="text-body-secondary">Mazunte</small></p>
              </div>
            </div> 
          </div>
          <div className="col-4 mt-3">
            <div className="card">
              <img src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Sayulita beach</h5>
                <p><i class="fa-solid fa-location-dot"></i> <small class="text-body-secondary">Cancun</small></p>
              </div>
            </div> 
          </div>
          <div className="col-4 mt-3">
            <div className="card">
              <img src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p><i class="fa-solid fa-location-dot"></i> <small class="text-body-secondary">Cancun</small></p>
              </div>
            </div> 
          </div>
        </div>
        <div className="row mt-5" style={{ marginBottom:'15px' }}>
          <div className="col-3">
            <div className="card text-center">
              <h3 style={{ lineHeight:"90px" }} className="display-4 text-info">24+</h3>
              <p className="text-body-secondary">Cities</p>
            </div>
          </div>
          <div className="col-3">
            <div className="card text-center">
              <h3 style={{ lineHeight:"90px" }} className="display-4 text-info">700+</h3>
              <p className="text-body-secondary">Place</p>
            </div>
          </div>
          <div className="col-3">
            <div className="card text-center">
              <h3 style={{ lineHeight:"90px" }} className="display-4 text-info">200+</h3>
              <p className="text-body-secondary">Hotel</p>
            </div>
          </div>
          <div className="col-3">
            <div className="card text-center">
              <h3 style={{ lineHeight:"90px" }} className="display-4 text-info">2K+</h3>
              <p className="text-body-secondary">Review</p>
            </div>
          </div>
        </div>
      </div>      
    </>
  );
}