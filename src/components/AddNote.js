import React, { useState } from 'react'

export default function AddNote(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        if (title && description) {
            props.addNote(title, description);
            setTitle("");
            setDescription("");
        }
        else
            alert("Values can't be set empty!");
    }

    return (
        <div className='container my-3'>
            <h2>Add a To-do</h2>
            <form onSubmit={addNote}>
                <div className="form-group my-2">
                    <label htmlFor="label">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="label" placeholder="Enter Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" id="label" placeholder="Enter Description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success my-3">Submit</button>
            </form>
            <hr style={{ margin: '2rem 0' }} />;
        </div>
    )
}
