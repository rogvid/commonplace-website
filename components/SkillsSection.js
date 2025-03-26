'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  'Frontend Development': [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
  ],
  'Backend Development': [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MongoDB', level: 70 },
  ],
  'DevOps & Tools': [
    { name: 'Docker', level: 75 },
    { name: 'Git', level: 90 },
    { name: 'AWS', level: 70 },
    { name: 'CI/CD', level: 80 },
  ],
  'Other Skills': [
    { name: 'UI/UX Design', level: 75 },
    { name: 'Agile/Scrum', level: 85 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Team Leadership', level: 80 },
  ],
};

const SkillBar = ({ name, level }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-cyber-gray">{name}</span>
        <span className="text-cyber-blue">{level}%</span>
      </div>
      <div className="h-2 bg-cyber-black/50 rounded-sm overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-cyber-blue to-cyber-pink"
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="cyber-container"
      >
        <h2 className="text-3xl font-bold text-white mb-8">
          <span className="bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-cyber-black/30 border border-cyber-blue/20 rounded-sm p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,238,255,0.05) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(0,238,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </motion.div>
    </section>
  );
};

export default SkillsSection; 