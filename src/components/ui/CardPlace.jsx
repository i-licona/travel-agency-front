import React from 'react'

export const CardPlace = ({ title, subtitle, img }) => {
  return (
    <div className="col-sm-12 col-md-4 mt-3">
      <div className="card">
        <img src={ img } className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <p><i className="fa-solid fa-location-dot"></i> <small className="text-body-secondary">{ subtitle }</small></p>
        </div>
      </div> 
    </div>
  )
}
