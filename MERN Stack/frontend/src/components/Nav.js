import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MERN Stack Todo
        </Link>
        <div className="d-flex" id="navbarText">
          <ul
            className="navbar-nav ml-auto"
            style={{ display: "inline-block" }}
          >
            <li className="nav-item mr-4" style={{ display: "inline-block" }}>
              <Link className="nav-link" to="/create">
                Create
              </Link>
            </li>
            {/* TODO: open model for default email */}
            <li className="nav-item mr-4" style={{ display: "inline-block" }}>
              <Link className="nav-link" to="/set-email">
                Default Email
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
