import './NewPost.css'
import {useRef} from "react";
import axios from "axios";
import {POSTS_URL} from "../../constants/post-service-endpoints";

function NewPost(props) {

    const newPostForm = useRef();

    const addPost = () => {
        const form = newPostForm.current;
        const data = {
            title: form['title'].value,
            content: form['content'].value,
            author: form['author'].value,
            userId: 101 // static user-id for now
        };

        axios.post(POSTS_URL, data)
            .then(() => {
                props.handleReloadPosts();
            })
            .catch(error => {
                console.error('Error while creating new post, error=', error.message);
            })
    }

    return (
        <div className="NewPost">
            <form ref={newPostForm}>
                <h3>Add Post</h3>

                <label>Title:</label>
                <input type="text"
                       label={'title'}
                       name={'title'}
                />

                <label>Content:</label>
                <input type="text"
                       label={'content'}
                       name={'content'}
                />

                <label>Author:</label>
                <input type="text"
                       label={'author'}
                       name={'author'}
                />

            </form>
            <button onClick={addPost}> Add Post</button>
        </div>
    );

}

export default NewPost;