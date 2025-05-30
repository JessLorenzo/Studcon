import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/studcon_logo.avif";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="studcon logo" className="navbar__logo" />{" "}
      </Link>

      <div className="navbar__buttons">
        <button className="navbar__button" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="navbar__button" onClick={() => navigate("/about")}>
          About Us
        </button>
        <button className="navbar__button" onClick={() => navigate("/about")}>
          Services
        </button>
        <button className="navbar__button" onClick={() => navigate("/contact")}>
          Contact
        </button>
      </div>
    </nav>
  );
}
