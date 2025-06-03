import "./Footer.scss";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/studcon_logo.avif";
import Instagram from "../../assets/icons/instagram.png";
import Facebook from "../../assets/icons/facebook.png";
import Whatsapp from "../../assets/icons/whatsapp.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Link to="/">
          <img src={Logo} alt="studcon logo" className="footer__logo" />{" "}
        </Link>
        <div className="footer__contact">
          <div className="footer__social-icons">
            <a href="https://www.instagram.com">
              <img
                src={Instagram}
                alt="Instagram icon"
                className="footer__social-icon"
              />
            </a>
            <a href="https://www.Facebook.com">
              <img
                src={Facebook}
                alt="Facebook icon"
                className="footer__social-icon"
              />
            </a>
            <a href="https://www.whatsapp.com">
              <img
                src={Whatsapp}
                alt="Whatsapp icon"
                className="footer__social-icon"
              />
            </a>
          </div>
          <p>Tel: (786) 689-8522 / (786) 218-0631</p>
          <p>Email: estimates@studcon.com</p>
        </div>
      </div>
    </footer>
  );
}
