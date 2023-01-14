import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./tempform.css";


class Customersform extends Component {
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
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="License"
                      name="license"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="password"
                      placeholder="Channel Partner"
                      name="channel-partner"
                    />
                  </div>
                  <Link  class="form-control" to="/dialerlink">Dialer link and domain</Link>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="confirm-password"
                      placeholder="CPASS Info"
                      name="cpass-info"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      id="confirm-password"
                      placeholder="DID Count"
                      name="did-count"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="confirm-password"
                      placeholder="CPASS Info"
                      name="cpass-info"
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

export default Customersform


                   