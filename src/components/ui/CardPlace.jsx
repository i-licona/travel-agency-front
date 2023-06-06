import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CardPlace = ({ title, subtitle, img }) => {

  const navigate = useNavigate();

  const onRedirectTo = () =>{
    navigate('/destiny-detail');
  }

  return (
    <div onClick={ () => onRedirectTo() } style={{ cursor:'pointer' }}  className="col-sm-12 col-md-4 mt-3">
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
