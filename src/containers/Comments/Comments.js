import './Comments.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {POSTS_URL} from "../../constants/post-service-endpoints";
import Comment from "../../components/Comment/Comment";

function Comments(props) {

    const postId = props.postId

    const [commentsState, setCommentsState] = useState([]);

    const fetchComments = () => {
        axios.get(`${POSTS_URL}/${postId}/comments`)
            .then(response => setCommentsState(response.data))
            .catch(error => console.log(`Error while fetching comments for postId=${postId}, error=${error.message}`))
    }

    useEffect(fetchComments, [postId])

    const commentComponents = commentsState.map(c =>
        <Comment id={c.id} key={c.id} comment={c.name}/>
    )

    return (<>
        <div className="Comments">
            <h4>Comments:</h4>
            <ul>{commentComponents}</ul>
        </div>

    </>)
}

export default Comments;