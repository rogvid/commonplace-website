import React from 'react';
import Card from './Card';

const NotePreview = ({ note }) => {
  return (
    <Card
      href={`/notes/${note.type}/${note.slug}`}
      title={note.title}
      description={note.excerpt}
      date={note.date}
      tags={note.tags}
      type="note"
    >
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span className="px-2 py-1 rounded-full bg-indigo-50 text-indigo-600">
          {note.type}
        </span>
        <span>•</span>
        <span>{note.readingTime} min read</span>
      </div>
    </Card>
  );
};

export default NotePreview; 