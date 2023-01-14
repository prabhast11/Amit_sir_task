import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Telcoprovider extends Component {
  render() {
    return (
      <div className="">
        <Link to="/telcoproviderform">
          {" "}
          <Button variant="primary" style={{ float: "right" }}>
            Add Details
          </Button>{" "}
        </Link>
        <h1>Telco Provider</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>IP</th>
              <th>Port</th>
              <th>User and Password</th>
              <th>Media IP</th>
              <th>SBC IP and Port</th>
              <th>Gateway IP</th>
              <th>Domain</th>
              <th>Account Manager</th>
              <th>Technical Manager</th>
              <th>Escalation Matrix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ajay</td>
              <td>Mr.</td>
              <td>Pune</td>
              <td>13-01-2023</td>
              <td>12-08-2022</td>
              <td>pqr</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
            </tr>
            <tr>
              <td>Ajay</td>
              <td>Mr.</td>
              <td>Pune</td>
              <td>13-01-2023</td>
              <td>12-08-2022</td>
              <td>pqr</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
            </tr>
            <tr>
              <td>Ajay</td>
              <td>Mr.</td>
              <td>Pune</td>
              <td>13-01-2023</td>
              <td>12-08-2022</td>
              <td>pqr</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Telcoprovider;
