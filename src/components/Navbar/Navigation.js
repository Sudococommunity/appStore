import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"

const NavigationBar = (props) => {
  return (
    <Fragment>
      <div className="sidebar">
        <NavLink to="/" className="nav-link" activeClassName="active">All</NavLink>
        <NavLink to="/gaming" className="nav-link" activeClassName="active">Games</NavLink>
        <NavLink to="/finance" className="nav-link" activeClassName="active">Finance</NavLink>
        <NavLink to="/social" className="nav-link" activeClassName="active">Social</NavLink>
        <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
      </div>
    </Fragment>
  );
};

export default NavigationBar;
