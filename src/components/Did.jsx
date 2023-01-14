import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


class Did extends Component {
  render() {
    return (
      <div> 
 <Link to='/didform'>        <Button variant="primary" style={{float : 'right'}}>Add Details
</Button>{' '}</Link >        <h1>DID</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Initial</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ajay</td>
          <td>Mr.</td>
        </tr>
        <tr>
          <td>Ajay</td>
          <td>Mr.</td>
        </tr>
        <tr>
          <td>Ajay</td>
          <td>Mr.</td>
        </tr>
        
      </tbody>
    </Table></div>
    )
  }
}

export default Did