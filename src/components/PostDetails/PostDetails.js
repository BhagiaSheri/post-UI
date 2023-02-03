import './PostDetails.css'
import axios from "axios";
import {POSTS_URL} from "../../constants/post-service-endpoints";
import Comments from "../../containers/Comments/Comments";
import {useContext, useEffect, useState} from "react";
import {SelectedPostContext} from "../../context/SelectedPost";

function PostDetails(props) {

    const [postDetailsState, setPostDetailsState] = useState({})
    const {selectedPostId} = useContext(SelectedPostContext);

    const postId = selectedPostId;

    const fetchPostById = () => {
        axios.get(`${POSTS_URL}/${postId}`)
            .then(response => setPostDetailsState(response.data))
            .catch(error => console.log("Error while fetching post details, error = " + error.message))
    }

    useEffect(() => fetchPostById, [postId])

    const deletePostById = () => {
        axios.delete(`${POSTS_URL}/${postId}`)
            .then(() => props.onClick())
            .catch(error => console.log("Error while fetching posts, error = " + error.message))
    }
    const handleDeleteOnClick = () => {
        deletePostById();
    }

    const [showCommentsFlag, setShowCommentFlag] = useState(false);

    const handleShowHideCommentsOnClick = () => {
        setShowCommentFlag(!showCommentsFlag);
    }

    return (
        <div className="PostDetails">
            <h4>*** POST DETAILS OF ID # {postDetailsState.id} ***</h4>
            <h6>Title: {postDetailsState.title}</h6>
            <h6>Content: {postDetailsState.content}</h6>
            <h6>Author: {postDetailsState.author}</h6>
            <button onClick={handleDeleteOnClick}>Delete</button>
            <button onClick={handleShowHideCommentsOnClick} className="comment-btn">
                {showCommentsFlag ? "Hide Comments" : "Load Comments"}
            </button>
            {showCommentsFlag ? <Comments/> : null}
        </div>
    )
}

export default PostDetails