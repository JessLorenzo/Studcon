import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/studcon_logo.avif";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="studcon logo" className="navbar__logo" />
      </Link>

      <div className="navbar__buttons">
        <a className="navbar__button" href="#about">
          About Us
        </a>
        <a className="navbar__button" href="#services">
          Services
        </a>
        <a className="navbar__button" href="#projects">
          Projects
        </a>
        <a className="navbar__button navbar__button-contact" href="#contact">
          Free Estimate
        </a>
      </div>
    </nav>
  );
}
