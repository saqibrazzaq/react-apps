import React, { Component } from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Atlantic from "./atlantic";
import Pacific from "./pacific";

export class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui stackable menu">
          <Link className="item" to="/atlantic">Atlantic</Link>
          <Link className="item" to="/pacific">Pacific</Link>
          <Link className="item" to="/admin/index">Admin</Link>
        </div>
        <Outlet />
      </div>
    );
  }
}

export default App;
