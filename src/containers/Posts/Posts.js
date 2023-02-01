import Post from "../../components/Post/Post"

function Posts(props) {

    const postComponents = props.posts.map(p =>
        <Post id={p.id} key={p.id} title={p.title} content={p.content} author={p.author} />
    )

    return postComponents;

}

export default Posts;