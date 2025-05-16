import './Styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1>Welcome to My Portfolio</h1>
            <p>Frontend Developer & UI/UX Designer</p>
            <div className="home-buttons">
              <a href="#projects" className="cta-button primary">View My Work</a>
              <a href="#contact" className="cta-button secondary">Get In Touch</a>
            </div>
          </div>
          
          <div className="home-images">
            <div className="image-container container-1">
              <img src="src\assets\Home\web.png" alt="Project Preview 1" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h3>Web Design</h3>
                  <p>Creative & Responsive</p>
                </div>
              </div>
            </div>
            
            <div className="image-container container-2">
              <img src="src\assets\Home\Ui.png" alt="Project Preview 2" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h3>UI/UX Design</h3>
                  <p>User-Centered Approach</p>
                </div>
              </div>
            </div>
            
            <div className="image-container container-3">
              <img src="src\assets\Home\react.png" alt="Project Preview 3" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h3>React Development</h3>
                  <p>Modern & Scalable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <a href="#about">
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;