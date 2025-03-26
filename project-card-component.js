import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(45, 200, 255, 0.5)' }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/projects/${project.id}`} className="project-link">
        <div className="project-image-container">
          {project.image ? (
            <Image 
              src={project.image} 
              alt={project.title} 
              width={400}
              height={225}
              className="project-image"
            />
          ) : (
            <div className="project-image-placeholder">
              <span className="placeholder-icon">⚙️</span>
            </div>
          )}
          <div className="project-overlay">
            <span className="view-project">View Project</span>
          </div>
        </div>
        
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          <div className="project-tags">
            {project.tags.map(tag => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
