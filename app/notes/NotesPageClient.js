'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ContentTypeInfo } from '../data/contentTypes';

export default function NotesPageClient({ initialContent }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Get all unique tags from all content
  const allTags = [...new Set(initialContent.flatMap(({ content }) => 
    content.flatMap(post => post.frontmatter.tags || [])
  ))].sort();

  // Filter content based on search query, type, and tag
  const filteredContent = initialContent.map(section => ({
    ...section,
    content: section.content.filter(post => {
      const matchesSearch = (post.frontmatter.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
                          (post.frontmatter.description?.toLowerCase() || '').includes(searchQuery.toLowerCase());
      const matchesType = !selectedType || section.type === selectedType;
      const matchesTag = !selectedTag || post.frontmatter.tags?.includes(selectedTag);
      return matchesSearch && matchesType && matchesTag;
    })
  }));

  // Flatten all content into a single array for display
  const allFilteredContent = filteredContent
    .flatMap(section => section.content.map(post => ({ ...post, type: section.type })))
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 heading-gradient">
            Notes & Writing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            A collection of my thoughts, learnings, and guides about development, design, and technology.
            Explore blog posts, technical reports, reviews, and quick insights.
          </p>
        </div>
      </section>

      {/* Content Type Overview */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800/50 border-y border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {initialContent.map(({ type }) => {
              const info = ContentTypeInfo[type];
              const isSelected = selectedType === type;
              return (
                <button
                  key={type}
                  onClick={() => setSelectedType(isSelected ? '' : type)}
                  className={`p-4 rounded-xl border transition-all duration-200 text-left
                    ${isSelected 
                      ? `bg-${info.color}-50 dark:bg-${info.color}-900/20 border-${info.color}-200 dark:border-${info.color}-700`
                      : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                >
                  <div className="text-2xl mb-2">{info.icon}</div>
                  <h3 className="font-medium mb-1">{info.label}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{info.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <div className="container mx-auto px-4">
        <div className="py-8 space-y-6">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full
                     text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800
                     focus:outline-none transition-all duration-200"
          />

          {/* Tags Filter */}
          {allTags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? '' : tag)}
                  className={`px-4 py-2 rounded-full transition-all duration-200
                    ${selectedTag === tag
                      ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border-blue-200 dark:border-blue-700'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                    } border hover:border-gray-300 dark:hover:border-gray-600`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-8">
          {allFilteredContent.map((post) => {
            const info = ContentTypeInfo[post.type];
            return (
              <Link
                key={`${post.type}-${post.slug}`}
                href={`/notes/${post.type}/${post.slug}`}
                className={`group block bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg 
                  transition-all duration-200 overflow-hidden border border-gray-100 dark:border-gray-700
                  hover:border-${info.color}-200 dark:hover:border-${info.color}-700`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">{info.icon}</span>
                    <span className={`text-sm font-medium text-${info.color}-600 dark:text-${info.color}-400`}>
                      {info.label}
                    </span>
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 text-gray-900 dark:text-white 
                    group-hover:text-${info.color}-600 dark:group-hover:text-${info.color}-400 transition-colors`}>
                    {post.frontmatter.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {post.frontmatter.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <time dateTime={post.frontmatter.date}>
                      {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                    <span>{post.frontmatter.readingTime.text}</span>
                  </div>
                  {post.frontmatter.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.frontmatter.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-0.5 bg-${info.color}-50 dark:bg-${info.color}-900/20 
                            text-${info.color}-600 dark:text-${info.color}-400 rounded-full text-sm`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
} 