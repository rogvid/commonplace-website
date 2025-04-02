'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ContentTypeInfo } from '@/app/data/contentTypes';

export default function NotesPageClient({ initialContent }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Get all unique tags from all content
  const allTags = [...new Set(initialContent.flatMap(({ content }) => 
    content.flatMap(post => post.tags || [])
  ))].sort();

  // Filter content based on search query, type, and tag
  const filteredContent = initialContent.map(section => ({
    ...section,
    content: section.content.filter(post => {
      const matchesSearch = (post.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
                          (post.excerpt?.toLowerCase() || '').includes(searchQuery.toLowerCase());
      const matchesType = !selectedType || section.type === selectedType;
      const matchesTag = !selectedTag || post.tags?.includes(selectedTag);
      return matchesSearch && matchesType && matchesTag;
    })
  }));

  // Flatten all content into a single array for display
  const allFilteredContent = filteredContent
    .flatMap(section => section.content.map(post => ({ ...post, type: section.type })))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const colorMap = {
    blog: {
      selected: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700',
      hover: 'hover:border-indigo-200 dark:hover:border-indigo-700',
      text: 'text-indigo-600 dark:text-indigo-400',
      tag: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400',
    },
    reports: {
      selected: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700',
      hover: 'hover:border-blue-200 dark:hover:border-blue-700',
      text: 'text-blue-600 dark:text-blue-400',
      tag: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    },
    tif: {
      selected: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700',
      hover: 'hover:border-emerald-200 dark:hover:border-emerald-700',
      text: 'text-emerald-600 dark:text-emerald-400',
      tag: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
    },
    til: {
      selected: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700',
      hover: 'hover:border-amber-200 dark:hover:border-amber-700',
      text: 'text-amber-600 dark:text-amber-400',
      tag: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
    },
    reviews: {
      selected: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700',
      hover: 'hover:border-purple-200 dark:hover:border-purple-700',
      text: 'text-purple-600 dark:text-purple-400',
      tag: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
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
                      ? colorMap[type].selected
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
                  ${colorMap[post.type].hover}`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">{info.icon}</span>
                    <span className={`text-sm font-medium ${colorMap[post.type].text}`}>
                      {info.label}
                    </span>
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 text-gray-900 dark:text-white 
                    group-hover:${colorMap[post.type].text} transition-colors`}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                    <span>{post.readTime}</span>
                  </div>
                  {post.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-0.5 ${colorMap[post.type].tag} rounded-full text-sm`}
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