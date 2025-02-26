import {Link} from "react-router-dom"
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
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
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/data">
                  Product Data
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/propdrill">
                  PropDrill
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contextapi">
                  Context-api
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ref">
                  Ref-Hook
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reducer">
                  Reducer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
