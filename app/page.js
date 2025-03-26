'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 heading-gradient">
              Welcome to my digital world
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Developer passionate about creating innovative and user-friendly solutions. 
              Constantly exploring new technologies and possibilities in the digital realm.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/projects" className="btn btn-primary">
                View my projects
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Notes Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 heading-gradient">Latest Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">CSS Grid Techniques</h3>
              <p className="text-gray-600">Notes about CSS Grid coming soon...</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">React Performance</h3>
              <p className="text-gray-600">Notes about React Performance coming soon...</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/notes" className="btn btn-secondary">
              View all notes
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 heading-gradient">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Project One</h3>
              <p className="text-gray-600">Project description coming soon...</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Project Two</h3>
              <p className="text-gray-600">Project description coming soon...</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Project Three</h3>
              <p className="text-gray-600">Project description coming soon...</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/projects" className="btn btn-secondary">
              View all projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 