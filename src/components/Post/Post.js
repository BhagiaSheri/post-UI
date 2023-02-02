import './Post.css'
import {useState} from "react";
import PostDetails from "../PostDetails/PostDetails";

function Post(props) {

    const [postDetailsFlag, setPostDetailsFlag] = useState(false)

    const handlePostClick = () => {
        setPostDetailsFlag(!postDetailsFlag)
    }

    return (
        <>
            <div className="Post" onClick={handlePostClick}>
                <h6>Id: {props.id}</h6>
                <h6>Title: {props.title}</h6>
                <h6>Content: {props.content}</h6>
                <h6>Author: {props.author}</h6>
            </div>
            {postDetailsFlag ? <PostDetails postDetails={props}/> : null}
        </>
    )
}

export default Post