import React, { useState, useEffect } from 'react';

const AddNoteModal = ({ onSave, onClose, noteToEdit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    }
  }, [noteToEdit]);

  const handleSubmit = () => {
    if (onSave) {
      onSave({ title, content });  // Ensure onSave is called here
      onClose();
    }
  };

  return (
    <div className="modal">
      <h2>{noteToEdit ? "Edit Note" : "Add Note"}</h2>
      <form>
        <label>Title</label>
        <br />
        <input 
          type="text" 
          placeholder="Enter note title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br /><br />
        <label>Content</label>
        <br />
        <textarea 
          placeholder="Enter note content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <br /><br />
        <button type="button" onClick={handleSubmit}>Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddNoteModal;
