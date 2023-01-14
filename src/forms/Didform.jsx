import React, { Component } from 'react'
import "./tempform.css";


class Didform extends Component {
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
                      placeholder="Listing"
                      name="listing"
                    />
                  </div>
                    Used :
                  <div class="form-group form-control">
                  <input type="radio" id="yes" name="used" value="Yes"/>
                  <label for="yes">Yes</label><br/>
                  <input type="radio" id="no" name="used" value="No"/>
                  <label for="no">No</label><br/>  

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

export default Didform