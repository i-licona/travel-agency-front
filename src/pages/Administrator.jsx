import React from "react";
import { Navbar } from "../components/main/Navbar";
export const Administrator = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-12 col-md-4">
            <div className="card mt-5">
              <div className="card-header text-center">
                <h2>Add destiny</h2>
              </div>
              <div className="card-body">
                <form autoComplete="off">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Email</span>
                    <input
                      name="email"
                      type="text"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">Password</span>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">
                      Aceptar{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8">
            <table className="table mt-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
