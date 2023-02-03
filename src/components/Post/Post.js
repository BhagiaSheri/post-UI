import './Post.css'
import {useState} from "react";
import PostDetails from "../PostDetails/PostDetails";
import {SelectedPostContext} from "../../context/SelectedPost";

function Post(props) {

    const [postDetailsFlag, setPostDetailsFlag] = useState(false)

    const [selectedPostId, setSelectedPostId] = useState(props.id)

    const handlePostClick = () => {
        setPostDetailsFlag(!postDetailsFlag)
    }

    return (
        <SelectedPostContext.Provider value={{selectedPostId, setSelectedPostId}}>
            <div className="Post" onClick={handlePostClick}>
                <h6>Id: {props.id}</h6>
                <h6>Title: {props.title}</h6>
                <h6>Content: {props.content}</h6>
                <h6>Author: {props.author}</h6>
            </div>
            {postDetailsFlag ? <PostDetails onClick={props.onClick}/> : null}
        </SelectedPostContext.Provider>
    )
}

export default Post