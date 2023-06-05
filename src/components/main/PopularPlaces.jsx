import React from 'react'

export const PopularPlaces = () => {
  return (
    <div className="row mt-5">
      <div className="col-sm-12 col-md-4">
        <h2 className="display-5">Popular places</h2>
      </div>
      <div className="col-sm-12 col-md-8">
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
  )
}
