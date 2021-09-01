import React from 'react';

const Card = ({post, handleEdit, handleDelete, handleNew}) => {
    return (
        <article className='card'>
            <header className='card-header'>
                <p className="card-header-title">
                    {post.title}
                </p>
            </header>
            <div className='card-content'>
                <div className='content'>
                    {post.body}
                </div>
            </div>
            <footer className='card-footer'>
                <button onClick={} className="card-footer-item">Edytuj</button>
                <button onClick={} className="card-footer-item">Kasuj</button>
                <button onClick={} className="card-footer-item">Dodaj Nowy</button>
            </footer>
        </article>
    )
}

export {Card}