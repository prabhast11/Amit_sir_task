import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


class Providers extends Component {
  render() {
    return (
      <div>
 <Link to='/providersform'><Button variant="primary" style={{float : 'right'}}>Add Details
</Button>{' '}</Link >        <h1>Providers</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Initial</th>
          <th>Location</th>
          <th>CurrentDate</th>
          <th>UpdateDate</th>
          <th>Account Manager</th>
          <th>Technical Contact Manager</th>
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
        </tr>
        <tr>
          <td>Ajay</td>
          <td>Mr.</td>
          <td>Pune</td>
          <td>13-01-2023</td>
          <td>12-08-2022</td>
          <td>pqr</td>
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
        </tr>
        
      </tbody>
    </Table>
      </div>
    )
  }
}

export default Providers