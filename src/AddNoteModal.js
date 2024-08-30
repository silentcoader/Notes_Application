import React, { useState } from 'react';

const AddNoteModal = ({ onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onSave({ title, content });
    onClose();
  };

  return (
    <div className="modal">
      <h2>Add Note</h2>
      <form>
        <label>Title</label>
        <input 
          type="text" 
          placeholder="Enter note title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label>Content</label>
        <textarea 
          placeholder="Enter note content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddNoteModal;
