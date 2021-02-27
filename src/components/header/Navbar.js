import React from "react";
import logo from "../../images/logo.png";
import "./navbar.css";
function Navbar() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <div className="container-fluid">
          <img src={logo} alt="" style={{ width: 100 }} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <a href="/shop">Shop</a>{" "}
              </li>
              <li className="nav-item mx-3">
                <a href="/order">Order review</a>
              </li>

              <li className="nav-item mx-3">
                <a href="/manage">Manage Inventory</a>{" "}
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
