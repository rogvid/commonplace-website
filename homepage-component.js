import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import NotePreview from '../components/NotePreview';

// Sample data - you'll want to replace this with real data later
const recentProjects = [
  {
    id: 'project-1',
    title: 'Neural Network Visualizer',
    description: 'Interactive visualization of neural network architectures with real-time training metrics.',
    tags: ['React', 'D3.js', 'TensorFlow.js'],
    image: '/images/projects/neural-net-preview.jpg',
  },
  {
    id: 'project-2',
    title: 'Quantum Algorithm Simulator',
    description: 'A web-based simulator for basic quantum computing algorithms with visual representation.',
    tags: ['TypeScript', 'WebAssembly', 'Quantum Computing'],
    image: '/images/projects/quantum-sim-preview.jpg',
  },
];

const recentNotes = [
  {
    id: 'til-1',
    title: 'CSS Container Queries',
    excerpt: 'Today I learned how to use CSS container queries for more granular responsive designs...',
    date: '2025-03-20',
    type: 'TIL',
    tags: ['CSS', 'Frontend'],
  },
  {
    id: 'tif-1',
    title: 'Optimizing React Renders',
    excerpt: 'Today I fixed a performance issue by implementing React.memo and useCallback...',
    date: '2025-03-18',
    type: 'TIF',
    tags: ['React', 'Performance'],
  },
];

const HomePage = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="cyber-container relative z-10"
        >
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent">
                Hello, World
              </span>
              <span className="text-white/80">_</span>
            </h1>
            <p className="text-xl text-cyber-gray mb-8">
              Welcome to my digital domain. Explorer of code, creator of digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="cyber-button">
                Explore Projects
              </Link>
              <Link href="/about" className="cyber-button bg-transparent hover:bg-cyber-blue/5">
                About Me
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,238,255,0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(0,238,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </section>
      
      {/* Recent Projects */}
      <section className="cyber-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent">
            Recent Projects
          </h2>
          <Link href="/projects" className="cyber-button text-sm">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      
      {/* Recent Notes */}
      <section className="cyber-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent">
            Latest Notes
          </h2>
          <div className="flex gap-4">
            <Link href="/til" className="cyber-button text-sm">
              TIL →
            </Link>
            <Link href="/tif" className="cyber-button text-sm">
              TIF →
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentNotes.map(note => (
            <NotePreview key={note.id} note={note} />
          ))}
        </div>
      </section>
      
      {/* GitHub Activity */}
      <section className="cyber-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent">
            GitHub Activity
          </h2>
          <Link 
            href="https://github.com/yourusername" 
            className="cyber-button text-sm"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Profile →
          </Link>
        </div>
        
        <div className="cyber-card">
          <p className="text-cyber-gray">
            GitHub activity visualization will be rendered here
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
