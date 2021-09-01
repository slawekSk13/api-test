import React, {useState, useEffect} from "react";
import { hot } from 'react-hot-loader/root';

import {getFromApi, postToApi, updateInApi, deleteFromApi} from "./utilities/ApiMethods";
import {PostsView} from "./views/PostsView";
import {Form} from "./components/Form/Form";


const App = () => {
const [posts, setPosts] = useState([]);

useEffect(() => getFromApi(data => setPosts(data), data => console.warn(data)),[]);

const handleEdit = () => console.log('edit');
const handleDelete = (id) => {
    setPosts(prev => {
       return prev.filter(post => post.id !== id);
    })
    deleteFromApi(id, data => console.log(data), error => console.warn(error));
};
const handleNew = () => console.log('new');

    return (
        <>
            <Form />
       <PostsView posts={posts} handleNew={handleNew} handleEdit={handleEdit} handleDelete={handleDelete} />
        </>
            )
}

export default hot(App);
