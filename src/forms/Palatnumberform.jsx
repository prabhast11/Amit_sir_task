import React, { Component } from 'react'
import "./tempform.css";



class Palatnumberform extends Component {
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
                      type="number"
                      class="form-control"
                      id="name"
                      placeholder="DID Number"
                      name="did-number"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      id="email"
                      placeholder="Channels"
                      name="channel"
                    />
                  </div>

                
                  
                  <div class="d-flex flex-row align-items-center justify-content-between">
                    <button class="btn btn-primary">Confirm </button>
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

export default Palatnumberform