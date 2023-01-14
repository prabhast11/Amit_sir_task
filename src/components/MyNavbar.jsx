import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class MyNavbar extends Component {
  render() {
    return (
      <div>
        <div class="m-4">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container-fluid">
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-
              target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarCollapse" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    
                    <li class="nav-item">
                        <Link to="/serverdetails" class="nav-link">Server Details</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/providers" class="nav-link">Providers</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/customers" class="nav-link">Customers</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/did" class="nav-link">DID</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/services" class="nav-link">Services</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/telcoprovider" class="nav-link">Telco Providers</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/palatnumber" class="nav-link">Palat Number</Link>
                    </li>
                  
                </ul>
                {/* <ul class="nav navbar-nav ms-auto">
                    <li class="nav-item dropdown">
                        <Link to="/hello" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Admin</Link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <Link to="/hello" class="dropdown-item">Reports</Link>
                            <a href="#" class="dropdown-item">Settings</a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">Logout</a>
                        </div>
                    </li>
                </ul> */}
            </div>
        </div>
    </nav>    
</div>

      </div>
    )
  }
}

export default MyNavbar