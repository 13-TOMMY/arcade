import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRegCopyright,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  const [inputValue, setInputValue] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailPattern.test(value));
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      if (isValidEmail) {
        setInputValue("");
      }
    }
  };
  return (
      <div className="footer-container">
        <div className="contact-container light-mode-card-background">
          <div className="contact-left">
            <h3 className="l-font">Lets keep in touch</h3>
            <p className="s-font">
              Curious about new offerings? <br /> Sign up for our weekly
              newsletter and stay informed.
            </p>
            <input
              type="email"
              placeholder="Your email"
              value={inputValue}
              onChange={handleInputChange}
              onKeyUp={handleKeyUp}
              className={!isValidEmail ? "invalid-email" : ""}
            />
            {!isValidEmail && (
              <p className="error-message m-font">
                Please enter a valid email address.
              </p>
            )}
          </div>
          <div className="contact-right">
            <h3 className="l-font">Follow Us!</h3>
            <Link
              className="social-wrapper m-font"
              to={"https://www.facebook.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" />
              <p className="s-font">Facebook</p>
            </Link>
            <Link
              className="social-wrapper m-font"
              to={"https://www.twitter.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
              <p className="s-font">Twitter</p>
            </Link>
            <Link
              className="social-wrapper m-font"
              to={"https://www.instagram.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
              <p className="s-font">Instagram</p>
            </Link>
          </div>
      </div>
      <div className="footer">
        <div className="footer-left">
          <p className="s-font">About Us</p>
          <p className="s-font">Terms & Conditions</p>
          <p className="s-font">Privacy & Cookies Policies</p>
        </div>
        <div className="footer-right">
          <p className="s-font">2023</p>
          <div className="copyright-uniLife">
            <FaRegCopyright />
            <p className="s-font">arcade.js</p>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Footer;
