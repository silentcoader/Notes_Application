import React from 'react';
import NoteCard from './NoteCard';

const NoteList = ({ notes, onDelete, onEdit }) => (
  <div className="note-list">
    {notes.map(note => (
      <NoteCard key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
    ))}
  </div>
);

export default NoteList;
