import React, { Component } from 'react'
import "./tempform.css";
import { Link } from 'react-router-dom';

class Telcoproviderform extends Component {
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
                      type="type"
                      class="form-control"
                      id="email"
                      placeholder="IP"
                      name="ip"
                    />
                  </div>
  
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      id="password"
                      placeholder="Port"
                      name="port"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      id="confirm-password"
                      placeholder="SBC IP and port"
                      name="sbc-ip-and-port"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="confirm-password"
                      placeholder="Gateway IP and port"
                      name="gateway-ip-and-port"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="confirm-password"
                      placeholder="Domain"
                      name="domain"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="confirm-password"
                      placeholder="Account Manager"
                      name="account-manager"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="confirm-password"
                      placeholder="Technical Manager"
                      name="technical-manager"
                    />
                  </div>
                  <div class="form-group">
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Providers</option>
                        <option value="1">Name`</option>
                        <option value="2">Email</option>
                        <option value="2">Phone number</option>
                      </select>
                    </div>
                  <div class="d-flex flex-row align-items-center justify-content-between">
                    <button class="btn btn-primary">Create Account</button>
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

export default Telcoproviderform