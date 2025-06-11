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
        <Link to="/" className="footer__logo-link">
          <img src={Logo} alt="Studcon logo" className="footer__logo" />
        </Link>

        <div className="footer__info">
          <div className="footer__contact">
            <p className="footer__contact-item">
              Tel: (786) 689-8522 / (786) 218-0631
            </p>
            <p className="footer__contact-item">Email: estimates@studcon.com</p>
          </div>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/_studcon?igsh=aXhpN3dldDYwOTk2"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img
                src={Instagram}
                alt="Instagram"
                className="footer__social-icon"
              />
              Instagram
            </a>
            <a
              href="https://wa.me/17862180631?text=Hi%20Studcon%2C%20I'm%20interested%20in%20a%20quote!"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img
                src={Whatsapp}
                alt="WhatsApp"
                className="footer__social-icon"
              />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        © {new Date().getFullYear()} Studcon. All rights reserved.
      </div>
    </footer>
  );
}
