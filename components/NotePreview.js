import React from 'react';
import Link from 'next/link';

const NotePreview = ({ note }) => {
  return (
    <Link href={`/notes/${note.id}`} className="group">
      <div className="cyber-card h-full">
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-2 py-1 text-xs rounded-sm ${
            note.type === 'TIL' 
              ? 'bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20'
              : 'bg-cyber-pink/10 text-cyber-pink border border-cyber-pink/20'
          }`}>
            {note.type}
          </span>
          <span className="text-sm text-cyber-gray">
            {new Date(note.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent group-hover:from-cyber-pink group-hover:to-cyber-blue transition-all duration-300">
          {note.title}
        </h3>
        
        <p className="text-cyber-gray mb-4">
          {note.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {note.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-sm bg-cyber-gray/10 text-cyber-gray border border-cyber-gray/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default NotePreview; 