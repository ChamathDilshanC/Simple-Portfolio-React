import './Styles/About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <div className="underline"></div>
          
          <div className="about-grid">
            <div className="about-image">
              <div className="image-container">
                {/* Replace with your image path */}
                <img src="src\assets\AbPhoto.png" alt="Profile" />
              </div>
            </div>
            
            <div className="about-text">
              <p>
                Hello! I'm a passionate frontend developer with expertise in building responsive and 
                user-friendly web applications. I specialize in React, TypeScript, and modern CSS frameworks.
              </p>
              
              <p>
                With a background in both design and development, I bring a unique perspective to projects,
                focusing on creating seamless user experiences while maintaining clean, efficient code.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or enjoying outdoor activities like hiking and photography.
              </p>
              
              <div className="about-details">
                <div className="detail-item">
                  <span className="detail-label">Name:</span>
                  <span className="detail-info">Chamath Dilshan</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">Email:</span>
                  <span className="detail-info">dilshancolonne123@gmail.com</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-info">Colombo, Srilanka</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">Availability:</span>
                  <span className="detail-info">Available for freelance</span>
                </div>
              </div>
              
              <div className="about-buttons">
                <a href="#contact" className="btn-primary">Contact Me</a>
                <a href="/resume.pdf" className="btn-secondary" download>Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;