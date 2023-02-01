import './Post.css'

function Post(props){

    return(
        <div className="Post">
            <h6>Id: {props.id}</h6>
            <h6>Title: {props.title}</h6>
            <h6>Content: {props.content}</h6>
            <h6>Author: {props.author}</h6>
        </div>
    )
}

export default Post