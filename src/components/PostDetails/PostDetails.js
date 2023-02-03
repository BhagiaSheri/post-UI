import './PostDetails.css'
import axios from "axios";
import {POSTS_URL} from "../../constants/post-service-endpoints";
import Comments from "../../containers/Comments/Comments";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";

function PostDetails() {

    const navigate = useNavigate()
    const params = useParams();
    const [postDetailsState, setPostDetailsState] = useState({})
    const [showCommentsFlag, setShowCommentFlag] = useState(false);
    const postId = params.id;

    const fetchPostById = () => {
        axios.get(`${POSTS_URL}/${postId}`)
            .then(response => setPostDetailsState(response.data))
            .catch(error => console.log("Error while fetching post details, error = " + error.message))
    }
    useEffect(() => fetchPostById, [postId])

    const deletePostById = () => {
        axios.delete(`${POSTS_URL}/${postId}`)
            .then(() => navigate("/"))
            .catch(error => console.log("Error while fetching posts, error = " + error.message))
    }
    const handleDeleteOnClick = () => {
        deletePostById();
    }

    const handleShowHideCommentsOnClick = () => {
        setShowCommentFlag(!showCommentsFlag);

    }

    return (
        <>
            <div className="PostDetails">
                <h4>POST DETAILS OF ID # {postDetailsState.id}</h4>
                <h6>Title: {postDetailsState.title}</h6>
                <h6>Content: {postDetailsState.content}</h6>
                <h6>Author: {postDetailsState.author}</h6>
                <button onClick={handleDeleteOnClick}>Delete</button>
                <Link to="comments">
                    <button onClick={handleShowHideCommentsOnClick} className="comment-btn">
                        {showCommentsFlag ? "Hide Comments" : "Load Comments"}
                    </button>
                </Link>
                {showCommentsFlag ? <Comments/> : null}
            </div>
        </>
    )
}

export default PostDetails