import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Serverdetails extends Component {
  render() {
    return (
      <div>
          <Link to='/serverdetailsform'>        <Button variant="primary" style={{float : 'right'}}>Add Details
</Button>{' '}</Link >
        <h1>Server Details</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>IP Addresses</th>
          <th>Providers</th>
          <th>Type</th>
          <th>Interfaces</th>
          <th>RAM</th>
          <th>CORE</th>
          <th>HDD</th>
          <th>Server Type</th>
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
          <td>Fast server</td>
        </tr>
        <tr>
          <td>Ajay</td>
          <td>Mr.</td>
          <td>Pune</td>
          <td>13-01-2023</td>
          <td>12-08-2022</td>
          <td>pqr</td>
          <td>abc</td>
          <td>Fast server</td>
        </tr>
        <tr>
          <td>Ajay</td>
          <td>Mr.</td>
          <td>Pune</td>
          <td>13-01-2023</td>
          <td>12-08-2022</td>
          <td>pqr</td>
          <td>abc</td>
          <td>Fast server</td>
        </tr>
        
      </tbody>
    </Table>
      </div>
    )
  }
}

export default Serverdetails