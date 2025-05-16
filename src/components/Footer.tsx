import './Styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h3>Your Name</h3>
            <p>Frontend Developer & UI/UX Designer</p>
          </div>
          
          <div className ="footer-links">
            <div className="footer-links-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Contact Info</h4>
              <ul className="contact-list">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Colombo, Sri Lanka</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>dilshancolonne123@gmail.com</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <span>+ 94 75 616104</span>
                </li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Follow Me</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/chamathdilsahnc/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/ChamathDilshanC" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Chamath Dilshan. All Rights Reserved.</p>
          </div>
          
          <div className="back-to-top">
            <a href="#home" aria-label="Back to top">
              <i className="fas fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;