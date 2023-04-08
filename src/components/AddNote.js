import React from 'react'

export default function AddNote() {
    return (
        <div className='container my-3'>
            <h2>Add a To-do</h2>
            <form>
                <div class="form-group">
                    <label for="label">Title</label>
                    <input type="text" class="form-control" id="label" placeholder="Enter Title" />
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="description" rows="3" placeholder="Enter Description"></textarea>
                </div>
                <button type="submit" class="btn btn-sm btn-success">Submit</button>

            </form>
        </div>
    )
}
