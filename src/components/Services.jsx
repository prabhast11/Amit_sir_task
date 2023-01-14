import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Services extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/servicesform">
          {" "}
          <Button variant="primary" style={{ float: "right" }}>
            Add Details
          </Button>{" "}
        </Link>
        <h1>Services</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Node Version</th>
              <th>Description</th>
              <th>Port</th>
              <th>Service Type</th>
              <th>Ist customer</th>
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
            </tr>
            <tr>
              <td>Ajay</td>
              <td>Mr.</td>
              <td>Pune</td>
              <td>13-01-2023</td>
              <td>12-08-2022</td>
              <td>pqr</td>
            </tr>
            <tr>
              <td>Ajay</td>
              <td>Mr.</td>
              <td>Pune</td>
              <td>13-01-2023</td>
              <td>12-08-2022</td>
              <td>pqr</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Services;
