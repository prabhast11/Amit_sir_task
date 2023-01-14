import React, { Component } from "react";
import "./tempform.css";

class Serverdetailsform extends Component {
constructor()
{
  super()
  this.state={
    name : '',
    provider : '',
    'ip-address' : '',
    providers : '',
    type : '',
    interfaces : '',
    ram : '',
    core : '',
    hdd : '',
    'service-type' : ''

  }
}

serverDetailsHandler = (e) =>{
  e.preventDefault()
  console.log('serverDetails Handler')
}
 
  render() {
    return (
      <div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-5">
              <div class="card">
                <h2 class="card-title text-center">Add Server Deatils</h2>
                <div class="card-body py-md-4">
                  <form _lpchecked="1" onSubmit={this.serverDetailsHandler}  >
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="IP Addresses"
                        name="ip-address"
                        onChange={(e) => { value= e.target.value
                          console.log("value" , value)
                        }}
                      />
                    </div>

                    <div class="form-group">
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                        name="providers"
                      >
                        <option selected>Providers</option>
                        <option value="1">Airtel</option>
                        <option value="2">Vodafone</option>
                        {/* <option value="3">Three</option> */}
                      </select>
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="Type"
                        placeholder="Type"
                        name="type"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="Type"
                        placeholder="Interfaces"
                        name="interfaces"
                      />
                    </div>

                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="password"
                        placeholder="RAM"
                        name="ram"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="confirm-password"
                        placeholder="CORE"
                        name="core"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="confirm-password"
                        placeholder="HDD"
                        name="hdd"
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
                    <div class="d-flex flex-row align-items-center justify-content-between">
                      <button  type="submit" class="btn btn-primary">Confirm</button>
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

export default Serverdetailsform;
