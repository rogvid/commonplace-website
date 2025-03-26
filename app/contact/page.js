'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.018-2.013-1.225-2.013-1.225 0-1.413.957-1.413 1.947v5.67h-3v-11h2.85v1.634h.042c.495-.938 1.705-1.93 3.51-1.93 3.751 0 4.45 2.469 4.45 5.682v6.624z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container pt-24 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 heading-gradient">
            Contact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Have an exciting project or just want to say hello? 
            I'm always interested in hearing from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong className="text-indigo-600">Email:</strong>
                    <br />
                    contact@example.com
                  </p>
                  <p>
                    <strong className="text-indigo-600">LinkedIn:</strong>
                    <br />
                    linkedin.com/in/username
                  </p>
                  <p>
                    <strong className="text-indigo-600">GitHub:</strong>
                    <br />
                    github.com/username
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday<br />
                  09:00 - 17:00
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                
                <div>
                  <label 
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 bg-white border border-gray-200 rounded-xl
                             text-gray-900 placeholder-gray-500
                             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                             focus:outline-none transition-all duration-200"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 bg-white border border-gray-200 rounded-xl
                             text-gray-900 placeholder-gray-500
                             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                             focus:outline-none transition-all duration-200"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 bg-white border border-gray-200 rounded-xl
                             text-gray-900 placeholder-gray-500
                             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                             focus:outline-none transition-all duration-200"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-3 bg-white border border-gray-200 rounded-xl
                             text-gray-900 placeholder-gray-500
                             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                             focus:outline-none transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-indigo-600 text-white rounded-xl
                           hover:bg-indigo-700 transition-colors duration-200
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="cyber-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Connect With Me</h2>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-gray hover:text-cyber-blue transition-colors duration-200"
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
} 