import React, {useEffect, useState} from "react";
import {hot} from 'react-hot-loader/root';

import {deleteFromApi, getFromApi, postToApi, updateInApi} from "./utilities/ApiMethods";
import {PostsView} from "./views/PostsView";
import {Form} from "./components/Form/Form";


const App = () => {
    const [posts, setPosts] = useState([]);
    const [postToEdit, setPostToEdit] = useState();
    const [newPost, setNewPost] = useState(false);

    useEffect(() => getFromApi(data => setPosts(data), errorCallback), []);

    const successCallback = data => console.log(data);
    const errorCallback = error => console.error(error);

    const handleUpdate = (post) => {
        updateInApi(post, successCallback, errorCallback)
        setPosts(prev => {
           const changedPost = prev.findIndex(oldPost => oldPost.id === post.id);
           return [...prev.slice(0, changedPost), post, ...prev.slice(changedPost + 1)];
        })
        setPostToEdit();
    }

    const handleDelete = (id) => {
        setPosts(prev => {
            return prev.filter(post => post.id !== id);
        })
        deleteFromApi(id, successCallback, errorCallback);
    };
    const handleNew = (post) => {
        postToApi(post, successCallback, errorCallback);
        setPosts(prev => {
            return [post, ...prev]
        })
        setNewPost(false);
    }

    return (
        postToEdit ? <Form handleSubmit={handleUpdate}
                           handleCancel={() => setPostToEdit()} //if postToEdit is set, render Form with postToEdit values
                           initialValues={postToEdit}/> : (newPost ?
            <Form handleSubmit={handleNew} handleCancel={() => setNewPost(false)}/> : //if postToEdit is not set, but newPost is true, render Form with initial values
            <PostsView posts={posts} handleEdit={(post) => setPostToEdit(post)}
                       handleCreateNew={() => setNewPost(true)} //else render Posts
                       handleDelete={handleDelete}/>)
    )
}

export default hot(App);
