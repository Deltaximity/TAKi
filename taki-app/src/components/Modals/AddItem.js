import React from 'react';

function AddItem() {
    return (
        <div className="modal add-item">
            <div className="modal-box">
                <p>Add item:</p>
                <input type="text" className="card"></input>
                <button className="add-item">Add item</button>
                <button className="cancel">Cancel</button>
            </div>
        </div>
    )
}

export default AddItem;