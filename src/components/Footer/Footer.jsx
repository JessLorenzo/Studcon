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
                class="footer__social-icon"
              />
            </a>
            <a href="https://www.Facebook.com">
              <img
                src={Facebook}
                alt="Facebook icon"
                class="footer__social-icon"
              />
            </a>
            <a href="https://www.whatsapp.com">
              <img
                src={Whatsapp}
                alt="Whatsapp icon"
                class="footer__social-icon"
              />
            </a>
          </div>
          <p>(305) 555-5555</p>
          <p>info@studcon.com</p>
        </div>
      </div>
    </footer>
  );
}
