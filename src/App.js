import React, { useState } from 'react';
import Header from './components/Header';
import NoteList from './components/NoteList';
import AddNoteModal from './components/AddNoteModal';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);

  const handleAddNote = (note) => {
    if (noteToEdit) {
      setNotes(notes.map(n => n.id === noteToEdit.id ? { ...noteToEdit, ...note } : n));
      setNoteToEdit(null);
    } else {
      setNotes([...notes, { id: Date.now(), ...note }]);
    }
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEditNote = (note) => {
    setNoteToEdit(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNoteToEdit(null);
  };

  return (
    <div className="app">
      <Header onAdd={() => setIsModalOpen(true)} />
      <NoteList notes={notes} onDelete={handleDeleteNote} onEdit={handleEditNote} />
      {isModalOpen && (
        <AddNoteModal
          onSave={handleAddNote}  // Ensure this line is present
          onClose={closeModal}
          noteToEdit={noteToEdit}
        />
      )}
    </div>
  );
};

export default App;
