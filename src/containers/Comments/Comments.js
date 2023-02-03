import './Comments.css'
import React, {useEffect, useState} from "react";
import axios from "axios";
import {POSTS_URL} from "../../constants/post-service-endpoints";
import Comment from "../../components/Comment/Comment";
import {useParams} from "react-router";

function Comments() {

    const params = useParams()
    const [commentsState, setCommentsState] = useState([]);
    const postId = params.id;

    const fetchComments = () => {
        axios.get(`${POSTS_URL}/${postId}/comments`)
            .then(response => setCommentsState(response.data))
            .catch(error => console.log(`Error while fetching comments for postId=${postId}, error=${error.message}`))
    }

    useEffect(() => fetchComments, [postId])

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