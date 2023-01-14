import React, { Component } from 'react'
import "./tempform.css";


class Servicesform extends Component {
  render() {
    return (
      <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card">
            <h2 class="card-title text-center">
            Add Deatils
            </h2>
            <div class="card-body py-md-4">
              <form _lpchecked="1">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Node Version"
                    name="node-version"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="password"
                    placeholder="Description"
                    name="description"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    id="confirm-password"
                    placeholder="Port"
                    name="port"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="confirm-password"
                    placeholder="Service Type"
                    name="service-type"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    id="confirm-password"
                    placeholder="1st Customer"
                    name="1st-customer"
                  />
                </div>
                <div class="d-flex flex-row align-items-center justify-content-between">
                  <button class="btn btn-primary">Confirm</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Servicesform