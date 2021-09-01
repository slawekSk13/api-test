import React, {useState, useEffect} from "react";
import { hot } from 'react-hot-loader/root';

import {getFromApi, postToApi, updateInApi, deleteFromApi} from "./utilities/ApiMethods";

const App = () => {
const [posts, setPosts] = useState([]);

useEffect(() => getFromApi(data => setPosts(data), data => console.warn(data)),[]);

    return (
        posts.map(post => <p>{post.title}</p>)
    )
}

export default hot(App);
