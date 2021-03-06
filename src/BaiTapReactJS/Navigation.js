import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#myMenu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="myMenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        )
    }
}
