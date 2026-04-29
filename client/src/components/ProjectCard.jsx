const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card project-card text-white h-100 shadow-sm border-secondary">
        <img src={project.image || "https://via.placeholder.com/400x200"} className="card-img-top" alt={project.title} />
        <div className="card-body d-flex flex-column">
          <div className="mb-2">
            {project.status && (
              <span className="badge bg-warning text-dark mb-2" style={{fontSize: '0.65rem'}}>
                {project.status}
              </span>
            )}
            <h5 className="card-title fw-bold">{project.title}</h5>
          </div>
          
          <p className="card-text text-secondary small line-clamp-2 flex-grow-1">
            {project.description}
          </p>
          
          <div className="mt-auto">
            <button 
              onClick={onViewDetails} 
              className="btn btn-outline-primary btn-sm w-100 mb-2"
            >
              Explore Architecture
            </button>
            <div className="d-flex justify-content-between px-1">
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-light small text-decoration-none hover-primary">
                    <i className="fab fa-github"></i> Code
                </a>
                {project.liveLink === "Coming Soon" ? (
                  <span className="text-secondary small italic">Coming Soon</span>
                ) : (
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-light small text-decoration-none hover-primary">
                      <i className="fas fa-external-link-alt"></i> Demo
                  </a>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;