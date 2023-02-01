import { useRef, useState } from "react";
import Posts from "../../containers/Posts/Posts";


function Dashboard() {

    const [postsState, setPostsState] = useState(
        [
            { id: 201, title: "Happiness", content: "Happiness Book Content", author: "John" },
            { id: 202, title: "MIU", content: "MIU Book Content", author: "Dean" },
            { id: 203, title: "Enjoy Life", content: "Enjoy Life Book Content", author: "Jasmine" }
        ]
    );

    const [title, setTitle] = useState(postsState[0].title)

    const handleChange = (event) => {
        setTitle(event.target.value);
      };
    
    const handleOnClick = () => {
        const newPostsState = [...postsState];
        newPostsState[0].title = title;
        setPostsState(newPostsState);
    };

    return (
        <>
            <div className="App-header">
                <Posts posts={postsState} />
            </div>

            <div>
                <h3>CHANGE TITLE OF FIRST POST</h3>
                <input
                    key={postsState[0].id}
                    type="text"
                    label={'title'}
                    name={'title'}
                    value= {title}
                    onChange={handleChange}
                />
                <button onClick={handleOnClick}>Update Title</button>
            </div>
        </>
    )

}

export default Dashboard;