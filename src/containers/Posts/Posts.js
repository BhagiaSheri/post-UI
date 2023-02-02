import Post from "../../components/Post/Post"
import {useEffect, useState} from "react";
import axios from "axios";
import {POSTS_URL} from "../../constants/post-service-endpoints";

function Posts(props) {

    const [postsState, setPostsState] = useState([]);

    const fetchPosts = () => {
        axios.get(POSTS_URL)
            .then(response => setPostsState(response.data))
            .catch(error => console.log("Error while fetching posts, error = " + error.message))
    }

    useEffect(fetchPosts, [props.reloadPosts])

    const postComponents = postsState.map(p =>
        <Post id={p.id} key={p.id} title={p.title} content={p.content} author={p.author} onClick={props.handleReloadPosts}/>
    )

    return (<>
        <h3>POSTS</h3>
        {postComponents}
    </>)


}

export default Posts;