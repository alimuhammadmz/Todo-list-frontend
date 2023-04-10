import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark py-3">
      <Link className="navbar-brand text-white" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">About</Link>
          </li>
        </ul>
        {props.searchBar ?
          <form className="form-inline ml-auto">
            <div className="input-group">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">Search</button>
              </div>
            </div>
          </form>
          : ""}
      </div>
    </nav>
  );
}
Header.defaultProps = {
  title: "Provide title"
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}