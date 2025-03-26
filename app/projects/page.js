'use client';

import React, { useState } from 'react';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container pt-24 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 heading-gradient">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore my portfolio of projects, ranging from web applications to 
            AI solutions and open source contributions.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 bg-white border border-gray-200 rounded-full
                         text-gray-900 placeholder-gray-500
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                         focus:outline-none transition-all duration-200"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-200
                    ${selectedCategory === category
                      ? 'bg-indigo-50 text-indigo-600 border-indigo-200 shadow-sm'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                    } border hover:border-gray-300`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.title} 
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm 
                         hover:shadow-md hover:border-gray-200 transition-all duration-200 relative"
              >
                {project.blogPost && (
                  <a
                    href={project.blogPost}
                    className="absolute inset-0 z-10"
                    aria-label={`Read more about ${project.title}`}
                  />
                )}
                <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-indigo-600/0 transition-colors duration-200" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-200"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 relative z-20">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary rounded-full flex-1 text-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary rounded-full flex-1 text-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 