import "../styles/navbar.css";
import CartWidget from "./CartWidget.js";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="nav-container">
        <div className="logo-container">
          <Link to={"/"}>
            <img
              className="logo-img"
              src={require("../img/gintocLogo.png")}
              alt="Gintoc brand logo"
            />
          </Link>
        </div>
        <div className="menu-container">
          <ul>
            <li>
              <Link to="/category/London">London Dry</Link>
            </li>
            <li>
              <Link to="/category/Spiced">Spiced Dry</Link>
            </li>
            <li>
              <Link to="/category/Pink">Pink</Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </nav>
    </header>
  );
}
