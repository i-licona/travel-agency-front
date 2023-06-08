import React from 'react'

export const CreateAccount = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4 offset-md-4">
          <div className="card mt-5">
            <div className="card-header text-center">
              <h2>Create account <i className="fa-solid fa-user"></i> </h2>
            </div>
            <div className="card-body">
              <form autoComplete="off">
                <div className="input-group mb-3">
                  <span className="input-group-text" >Name</span>
                  <input type="text" className="form-control" placeholder="Enter name"  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" >Firstname</span>
                  <input type="text" className="form-control" placeholder="Enter lastname"  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" >Lastname</span>
                  <input type="text" class="form-control" placeholder="Enter lastname"  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" >Email</span>
                  <input type="text" class="form-control" placeholder="Enter email"  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" >Lastname</span>
                  <input type="password" class="form-control" placeholder="Enter password"  />
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="button">Accept <i class="fa-solid fa-right-to-bracket"></i>  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
