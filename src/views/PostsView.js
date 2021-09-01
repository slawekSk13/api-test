import {Card} from "../components/Card/Card";
import React from "react";


const PostsView = ({posts, handleNew, handleDelete, handleEdit}) => {
    return (
        <main className='main'>
            <button onClick={handleNew} className="button is-success is-fullwidth">Nowy</button>
            {posts.map(post => <Card key={post.id} post={post} handleEdit={handleEdit} handleDelete={handleDelete}/>)}
        </main>
    )
}

export {PostsView}