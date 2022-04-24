import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export class AdminDashboard extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="four wide column">
          <div className="ui vertical fluid tabular menu">
            <Link to="/admin/index" className="item">
              Admin
            </Link>
            <Link to="/admin/products" className="item">
              Products
            </Link>
            <Link to="/admin/customers" className="item">
              Customers
            </Link>
          </div>
        </div>
        <div className="twelve wide stretched column">
          <div className="ui segment">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
