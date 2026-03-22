import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    }

    this.click = this.click.bind(this);
  }

  click = (e) => {
    this.props.history.push('/search');
    window.location.reload();
  }

  render() {

   const updateSearchResults = (e) => {
      
      if (e.target.value) {
        this.props.setSearchText(e.target.value);
      }
    }

    const handleSearch = (e) => {
      e.preventDefault();

      if (this.props.searchText) {
        console.log(this.props.searchText);
      }
    }

    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              MovieApp
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item disabled" aria-disabled="true" to="#">
                        Coming soon
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item disabled" aria-disabled="true" to="#">
                       Coming soon
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item disabled" aria-disabled="true" to="#">
                        Coming soon
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search" onSubmit={handleSearch}> 
                <input
                  className="form-control me-2"
                  id="search-val"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={this.props.searchText}
                  onChange={updateSearchResults}
                />
                <button className="btn btn-outline-success" type="submit" onClick={this.click}>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
