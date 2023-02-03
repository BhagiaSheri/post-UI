import Post from "../../components/Post/Post"
import {useEffect, useState} from "react";
import axios from "axios";
import {POSTS_URL} from "../../constants/post-service-endpoints";
import {Link} from "react-router-dom";

function Posts() {

    const [postsState, setPostsState] = useState([]);

    const fetchPosts = () => {
        axios.get(POSTS_URL)
            .then(response => setPostsState(response.data))
            .catch(error => console.log("Error while fetching posts, error = " + error.message))
    }

    useEffect(() => fetchPosts, [])

    const postComponents = postsState.map(p =>
        <Link to={`${p.id}`} key={p.id}>
            <Post id={p.id} key={p.id} title={p.title} content={p.content} author={p.author}/>
        </Link>
    )

    return (<>
        {postComponents}
    </>)


}

export default Posts;