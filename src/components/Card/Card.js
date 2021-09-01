import React from 'react';
import {Link} from "react-router-dom";

const Card = ({post, handleEdit, handleDelete}) => {
    return (
        <article className='card'>
            <header className='card-header'>
                <p className="card-header-title title">
                    {post.title}
                </p>
            </header>
            <div className='card-content'>
                <div className='content'>
                    {post.body}
                </div>
            </div>
            <footer className='card-footer'>
                <button onClick={() => handleEdit(post)} className="button card-footer-item is-primary">Edit</button>
                <button onClick={() => handleDelete(post.id)} className="button card-footer-item is-danger">Delete</button>

            </footer>
        </article>
    )
}

export {Card}