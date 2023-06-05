import React from 'react'

export const Header = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-7">
        <h1 className="display-3 mt-5">Explore the wonderfull world</h1>
        <form className="row mt-5">
          <div className="col-sm-6 col-md-3">
            <div className="input-group mb-3">
              <select className="form-control form-select">
                <option value="">Departure</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="input-group mb-3">
              <select className="form-control form-select">
                <option value="">Destiny</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="input-group mb-3">
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="input-group">
            <button className="btn btn-outline-secondary">Search</button>
            </div>
          </div>
        </form>
      </div>
      <div className="d-none d-md-block col-md-5">
        <img className="img-header mt-3" src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
      </div>       
    </div>
  )
}
