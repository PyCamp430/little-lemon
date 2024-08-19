import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg mb-4">
            <div className="container-fluid">
                <span className="navbar-brand"><img src={Logo} alt="Logo" width="200" height="50" className="d-inline-block align-text-top" /></span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reservations" className="nav-link">Reservations</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/orderOnline" className="nav-link">Order Online</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;