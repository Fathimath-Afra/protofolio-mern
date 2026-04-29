import { useEffect, useState } from 'react';
import './App.css';
import { getProjects } from './api/projectService';
import ProjectCard from './components/ProjectCard';

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // Social Links
  const linkedinURL = "https://www.linkedin.com/in/fathimath-afra-1aa307316";
  const githubURL = "https://github.com/Fathimath-Afra";

  useEffect(() => {
    getProjects().then(data => setProjects(data));
  }, []);

  return (
    <div>
      {/* 1. NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark px-4 border-bottom border-secondary shadow">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary fs-4" href="#">AFRA.DEV</a>
          <div className="ms-auto d-flex align-items-center">
            <div className="d-none d-md-block">
                <a href="#about" className="nav-link d-inline-block me-3 text-secondary small">About</a>
                <a href="#skills" className="nav-link d-inline-block me-3 text-secondary small">Skills</a>
                <a href="#projects" className="nav-link d-inline-block me-4 text-secondary small">Projects</a>
            </div>
            {/* Social Icons in Nav */}
            <div className="d-flex gap-3 border-start ps-4 border-secondary">
                <a href={linkedinURL} target="_blank" rel="noreferrer" className="text-secondary hover-primary"><i className="fab fa-linkedin fs-5"></i></a>
                <a href={githubURL} target="_blank" rel="noreferrer" className="text-secondary hover-primary"><i className="fab fa-github fs-5"></i></a>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="hero-section text-center container">
        <h1 className="display-1 fw-bold mb-2">
          Fathimath <span className="text-primary">Afra</span>
        </h1>
        <p className="lead fs-3 text-secondary mx-auto mb-4" style={{ maxWidth: '700px', letterSpacing: '1px' }}>
          Full Stack Developer
        </p>
        
        <div className="mt-4 mb-5">
          <a href="#projects" className="btn btn-primary px-4 py-2 me-2 shadow">View My Work</a>
          <a href="mailto:your@email.com" className="btn btn-outline-light px-4 py-2">Get In Touch</a>
        </div>

        {/* Big Social Buttons in Hero */}
        <div className="d-flex justify-content-center gap-4">
            <a href={linkedinURL} target="_blank" rel="noreferrer" className="text-secondary fs-4 hover-primary transition"><i className="fab fa-linkedin"></i></a>
            <a href={githubURL} target="_blank" rel="noreferrer" className="text-secondary fs-4 hover-primary transition"><i className="fab fa-github"></i></a>
        </div>
      </header>

      {/* 3. ABOUT ME SECTION */}
      <section id="about" className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-5 text-center">
            <img 
              src="/my-photo.png" 
              alt="Afra" 
              className="img-fluid rounded-4 border border-primary p-2 shadow-lg"
              style={{ maxWidth: '300px' }}
            />
          </div>
          <div className="col-md-7">
            <h2 className="fw-bold mb-4 text-primary">About Me</h2>
            <p className="text-secondary mb-3">
              Hello! I'm a passionate Full Stack Developer with a strong foundation in JavaScript and the MERN ecosystem. 
              I love solving complex problems and turning ideas into functional, user-friendly applications.
            </p>
            <p className="text-secondary mb-3">
              My approach to development focuses on writing clean, maintainable code using MVC architecture and industry best practices. 
              My background as a <strong>Programming Instructor</strong> allows me to break down complex architectural problems into clean, maintainable code.
            </p>
            <p className="text-secondary">
              I specialize in the MERN stack and am dedicated to building high-quality, scalable web applications that prioritize data integrity and performance.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="bg-dark py-5 border-top border-bottom border-secondary">
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-5 text-white">Expertise & Skills</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card skill-card p-4 h-100 border-0 shadow-lg">
                <div className="icon-box frontend-icon mb-3 mx-auto"><i className="fas fa-laptop-code fa-2x"></i></div>
                <h4 className="fw-bold text-white mb-3">Frontend</h4>
                <p className="text-light-gray small">React.js, Bootstrap, JavaScript (ES6+), HTML5, CSS3, Vite</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card skill-card p-4 h-100 border-0 shadow-lg">
                <div className="icon-box backend-icon mb-3 mx-auto"><i className="fas fa-server fa-2x"></i></div>
                <h4 className="fw-bold text-white mb-3">Backend & DB</h4>
                <p className="text-light-gray small">Node.js, Express.js, MongoDB, Mongoose, REST APIs, MVC Architecture</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card skill-card p-4 h-100 border-0 shadow-lg">
                <div className="icon-box teaching-icon mb-3 mx-auto"><i className="fas fa-chalkboard-teacher fa-2x"></i></div>
                <h4 className="fw-bold text-white mb-3">Teaching</h4>
                <p className="text-light-gray small"><strong>1 Year Instructor Experience.</strong> Mentoring students in JavaScript, Python, and Java.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <main id="projects" className="container py-5 mt-4">
        <h2 className="mb-5 fw-bold text-white"><i className="fas fa-code text-primary me-2"></i> Featured Projects</h2>
        <div className="row">
          {projects.length > 0 ? (
            projects.map(project => (
              <ProjectCard 
                key={project._id} 
                project={project} 
                onViewDetails={() => setSelectedProject(project)} 
              />
            ))
          ) : (
            <p className="text-center text-secondary py-5 italic">Fetching technical projects from MongoDB Atlas...</p>
          )}
        </div>
      </main>

      {/* 6. MODAL FOR PROJECT DETAILS */}
      {selectedProject && (
        <div className="modal fade show d-block" style={{backgroundColor: 'rgba(0,0,0,0.85)'}}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark text-white border-secondary shadow-lg">
              <div className="modal-header border-secondary">
                <h5 className="modal-title fw-bold text-primary">
                  {selectedProject.title}
                  {selectedProject.status && (
                    <span className="badge bg-warning text-dark ms-2" style={{fontSize: '0.6rem'}}>
                      {selectedProject.status}
                    </span>
                  )}
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setSelectedProject(null)}></button>
              </div>
              <div className="modal-body py-4">
                <img src={selectedProject.image || "https://via.placeholder.com/400x200"} className="img-fluid rounded mb-4 w-100" style={{maxHeight: '300px', objectFit: 'cover'}} alt="banner" />
                
                <h6 className="fw-bold text-white">Technical Architecture:</h6>
                <p className="text-light-gray small mb-4" style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                  {selectedProject.fullDescription || selectedProject.description}
                </p>

                {/* DEMO CREDENTIALS SECTION */}
                {selectedProject.testCredentials && selectedProject.testCredentials.length > 0 && (
                  <div className="mt-4 p-3 rounded border border-info bg-info bg-opacity-10 shadow-sm">
                    <h6 className="fw-bold text-info mb-3"><i className="fas fa-lock me-2"></i> Demo Credentials</h6>
                    <div className="row g-2">
                      {selectedProject.testCredentials.map((cred, i) => (
                        <div key={i} className="col-12 border-bottom border-secondary pb-2 mb-2 text-white">
                          <span className="badge bg-info text-dark mb-2">{cred.role}</span>
                          <div className="small">
                            <strong>Email:</strong> {cred.email} <br />
                            <strong>Password:</strong> {cred.password}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-4 pt-3 border-top border-secondary text-start">
                    <h6 className="fw-bold text-white small mb-3">Tech Stack:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                          <span key={i} className="badge tech-badge">{tech}</span>
                      ))}
                    </div>
                </div>
              </div>
              <div className="modal-footer border-secondary">
                <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm px-4">GitHub Code</a>
                {selectedProject.liveLink === "Coming Soon" ? (
                  <button disabled className="btn btn-secondary btn-sm px-4 opacity-50">Coming Soon</button>
                ) : (
                  <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm px-4">Live Demo</a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="text-center py-5 bg-dark border-top border-secondary mt-5">
        <div className="d-flex justify-content-center gap-4 mb-4">
            <a href={linkedinURL} target="_blank" rel="noreferrer" className="text-secondary fs-4 hover-primary"><i className="fab fa-linkedin"></i></a>
            <a href={githubURL} target="_blank" rel="noreferrer" className="text-secondary fs-4 hover-primary"><i className="fab fa-github"></i></a>
        </div>
        <p className="text-secondary small">© {new Date().getFullYear()} FATHIMATH AFRA | MERN Developer & Instructor</p>
      </footer>
    </div>
  );
}

export default App;