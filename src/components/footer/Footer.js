import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="col">
          <h5>Support</h5>
          <span className="bar"></span>
          <a> Contact Us</a>
          <a> Chat</a>
          <a> Help Center</a>
          <a> FAQ</a>
        </div>
        <div className="col">
          <h5>Developrs</h5>
          <span className="bar"></span>
          <a> Contact Us</a>
          <a> Chat</a>
          <a> Help Center</a>
          <a> FAQ</a>
        </div>
        <div className="col">
          <h5>Company</h5>
          <span className="bar"> </span>
          <a> Contact Us</a>
          <a> Chat</a>
          <a> Help Center</a>
          <a> FAQ</a>
        </div>
        <div className="col">
          <h5>Social</h5>
          <span className="bar"> </span>
          <a>
            <FaFacebook className="icon" />
          </a>
          <a>
            <FaTwitter className="icon" />
          </a>
          <a>
            <FaLinkedin className="icon" />
          </a>
          <a>
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
