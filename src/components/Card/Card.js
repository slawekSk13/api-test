import React from 'react';

const Card = ({post, handleEdit, handleDelete, handleNew}) => {
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
                <button onClick={handleEdit} className="button card-footer-item is-primary">Edytuj</button>
                <button onClick={() => handleDelete(post.id)} className="button card-footer-item is-danger">Kasuj</button>
                <button onClick={handleNew} className="button card-footer-item is-success">Nowy</button>
            </footer>
        </article>
    )
}

export {Card}