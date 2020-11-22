import React from 'react';
import TodoList from '../components/TodoList';

function Checklist() {

    return (
        <>
            <div className="card checklist">
                <p className="corner-label">To-Do</p>
                <TodoList />
            </div>
            <div className="card done-list">
                <p className="corner-label">Done</p>
            </div>
        </>
    )
}

export default Checklist;