import React, { Component } from "react";
import "./tempform.css";

class Providersform extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-5">
              <div class="card">
                <h2 class="card-title text-center">
                Add Providers Deatils
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
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                        name="initial"
                      >
                        <option selected>Initials</option>
                        <option value="1">Mr.</option>
                        <option value="2">Mrs.</option>
                        <option value="3">Ms.</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="password"
                        placeholder="Location"
                        name="location"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        onfocus="(this.type='date')"
                        onblur="(this.value == '' ? this.type='text' : this.type='date')"
                        class="form-control"
                        id="currentdate"
                        placeholder="Current Date"
                        name="currentdate"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="updated date"
                        name="updatedate"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Account Manager"
                        name="accountmanager"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Technical Contact Manager"
                        name="techicalcontactmanager"
                        
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
      </div>
    );
  }
}

export default Providersform;
