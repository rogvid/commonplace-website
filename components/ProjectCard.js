import React from 'react';
import Card from './Card';

const ProjectCard = ({ project }) => {
  return (
    <Card
      href={`/projects/${project.slug}`}
      title={project.title}
      description={project.description}
      date={project.date}
      tags={project.tags}
      type="project"
    >
      <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-gray-100">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            No image available
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard; 