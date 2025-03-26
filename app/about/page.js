'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL']
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git']
  },
  {
    category: 'AI/ML',
    items: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP', 'Reinforcement Learning']
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container pt-24 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 heading-gradient">
            About Me
          </h1>
          <p className="text-xl text-gray-600">
            Passionate developer focused on creating elegant and efficient solutions. My journey in the world of technology has given me a deep understanding of modern web development and software architecture.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* Profile Picture Placeholder */}
            <div className="w-48 h-48 mx-auto rounded-full bg-gray-200 border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold heading-gradient">
                Who Am I?
              </h2>
              <p className="text-gray-600">
                I'm a software developer with a passion for creating innovative solutions
                that push the boundaries of what's possible. With a background in
                computer science and years of experience in full-stack development,
                I specialize in building modern web applications and exploring
                cutting-edge technologies.
              </p>
              <p className="text-gray-600">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge through
                technical writing and speaking engagements.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-indigo-600">Quick Facts</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>🌍 Based in Denmark</li>
                  <li>💻 Full-stack Developer</li>
                  <li>🎓 Computer Science Background</li>
                  <li>🌱 Always Learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 heading-gradient">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Node.js</li>
                <li>Python</li>
                <li>API Design</li>
                <li>Database Architecture</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">DevOps & Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>CI/CD</li>
                <li>Cloud Platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 heading-gradient">Experience</h2>
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Senior Developer</h3>
              <p className="text-gray-500 mb-4">2020 - Present</p>
              <p className="text-gray-600">
                Lead developer on multiple large projects focusing on scalable solutions
                and modern technologies.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Fullstack Developer</h3>
              <p className="text-gray-500 mb-4">2018 - 2020</p>
              <p className="text-gray-600">
                Worked with both frontend and backend development in an agile team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}