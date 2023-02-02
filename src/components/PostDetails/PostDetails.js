import './PostDetails.css'
import axios from "axios";
import {POSTS_URL} from "../../constants/post-service-endpoints";
import Comments from "../../containers/Comments/Comments";
import {useState} from "react";

function PostDetails(props) {

    const postId = props.postDetails.id;
    const deletePostById = () => {
        axios.delete(`${POSTS_URL}/${postId}`)
            .then(() => props.postDetails.onClick())
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
            <h4>*** POST DETAILS OF ID # {props.postDetails.id} ***</h4>
            <h6>Title: {props.postDetails.title}</h6>
            <h6>Content: {props.postDetails.content}</h6>
            <h6>Author: {props.postDetails.author}</h6>
            <button onClick={handleDeleteOnClick}>Delete</button>
            <button onClick={handleShowHideCommentsOnClick} className="comment-btn">
                {showCommentsFlag ? "Hide Comments" : "Load Comments"}
            </button>
            {showCommentsFlag ? <Comments postId={postId}/> : null}
        </div>
    )
}

export default PostDetails