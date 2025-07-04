import React from 'react'
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{display: "absolute", top: "0", width: "100%"}}>
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/posts">Posts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/counter">Counter</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
