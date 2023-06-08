import React, { useState } from 'react'

const initialState = {
  email:'',
  password:''
}

export const Login = () => {

  const [form, setform] = useState(initialState);

  const onChangeInput = (event) =>{
    const value = event.target.value;
    const name = event.target.name;
    setform({
      /* estado no cambie */
      ...form,
      /* bueno si cambia pero solo este */
      [name]:value
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4 offset-md-4">
          <div className="card mt-5">
            <div className="card-header text-center">
              <h2>Login <i className="fa-solid fa-user"></i> </h2>
            </div>
            <div className="card-body">
              <form autoComplete="off">
                <div className="input-group mb-3">
                  <span className="input-group-text" >Email</span>
                  <input
                    value={ form.email }
                    onChange={ (e) => onChangeInput(e) }
                    name="email" 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter email"  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" >Password</span>
                  <input
                    value={ form.password }
                    onChange={ (e) => onChangeInput(e) }
                    name="password" 
                    type="password" 
                    className="form-control" 
                    placeholder="Enter password"  />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="button">Login <i className="fa-solid fa-right-to-bracket"></i>  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
