import React from 'react';
import Link from 'next/link';

const Card = ({ 
  href, 
  title, 
  description, 
  date, 
  tags = [], 
  type = 'default',
  children 
}) => {
  const baseClasses = "block p-6 rounded-xl border border-gray-100 bg-white hover:border-indigo-100 hover:shadow-md transition-all duration-200";
  
  const typeClasses = {
    default: '',
    project: 'hover:shadow-indigo-100',
    note: 'hover:shadow-indigo-100',
  };

  const content = (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-200">
          {title}
        </h3>
        {date && (
          <time className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        )}
      </div>
      
      {description && (
        <p className="text-gray-600 mb-4">
          {description}
        </p>
      )}
      
      {children}
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : content;
};

export default Card; 