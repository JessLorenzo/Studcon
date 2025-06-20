import "./Footer.scss";
import Logo from "../../assets/images/studcon_logo.avif";
import Instagram from "../../assets/icons/instagram.png";
import Whatsapp from "../../assets/icons/whatsapp.png";
import LinkedIn from "../../assets/icons/linkedin.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <a href="#top" className="footer__logo-link">
            <img src={Logo} alt="Studcon logo" className="footer__logo" />
          </a>
        </div>
        <div className="footer__right">
          <div className="footer__info">
            <h2>Connect With Us</h2>
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
              </a>
              <a
                href="https://www.linkedin.com/company/studcon/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <img
                  src={LinkedIn}
                  alt="LinkedIn"
                  className="footer__social-icon"
                />
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
              </a>
            </div>

            <div className="footer__contact">
              <p className="footer__contact-item">Tel: (786) 218-0631</p>
              <p className="footer__contact-item"> Email: Robert@studcon.net</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        © {new Date().getFullYear()} Studcon Drywall & Framing | All rights
        reserved.
      </div>
    </footer>
  );
}
