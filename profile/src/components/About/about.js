import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        Hello! I'm <strong>Teja</strong>, a passionate and results-driven Full Stack Web Developer. I specialize in building responsive, scalable web applications using modern technologies.
      </p>

      <h3>🚀 Technical Skills</h3>
      <ul>
        <li>Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS</li>
        <li>Backend: Node.js, Express.js, MongoDB</li>
        <li>Tools: Git, GitHub, REST APIs, VS Code</li>
      </ul>

      <h3>🎓 Education & Experience</h3>
      <p>
        I hold a Bachelor's degree in Computer Science. I have interned at XYZ Company where I worked on real-world web projects, contributing to both frontend and backend.
      </p>

      <h3>💡 What Drives Me</h3>
      <p>
        I'm driven by solving real-world problems with clean, efficient code. I'm constantly learning new tools and frameworks to enhance my development workflow.
      </p>

      <h3>🎯 Future Goals</h3>
      <p>
        I aim to master DevOps and cloud technologies, contribute to open-source projects, and work with innovative teams building impactful products.
      </p>

      <h3>🎨 Beyond Tech</h3>
      <p>
        Outside coding, I enjoy photography, hiking, and exploring creative UI/UX design ideas.
      </p>
    </section>
  );
};

export default About;
