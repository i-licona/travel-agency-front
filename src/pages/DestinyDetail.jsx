import React from 'react';
import { Navbar } from '../components/main/Navbar';
import { Carousel } from '../components/ui/Carousel';
import { Accordion } from '../components/ui/Accordion';

export const DestinyDetail = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12 col-md-7">            
            <Carousel />
          </div>
          <div className="col-sm-12 col-md-5">
            <Accordion/>
            <div className="d-flex justify-content-end">
              <button className="btn btn-secondary mt-3">Book now</button>
            </div>
          </div>
        </div>
      </div>     
    </>
  )
}
