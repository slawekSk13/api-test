import {Card} from "../components/Card/Card";
import React from "react";
import {Link} from 'react-router-dom';

const PostsView = ({posts, handleCreateNew, handleDelete, handleEdit}) => {
    return (
        <main className='main'>
            <button onClick={handleCreateNew} className="button is-success is-fullwidth">New</button>
            {posts.map(post => <Card key={post.id} post={post} handleEdit={handleEdit} handleDelete={handleDelete}/>)}
        </main>
    )
}

export {PostsView}