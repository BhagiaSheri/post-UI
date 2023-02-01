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

    const inputRef = useRef();
    
    const handleOnClick = () => {
        const newPostsState = [...postsState];
        newPostsState[0].title = inputRef.current.value;
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
                    ref={inputRef}
                    key={'201'}
                    type="text"
                    label={'title'}
                    name={'title'}
                />
                <button onClick={handleOnClick()}>Update Title</button>
            </div>
        </>
    )

}

export default Dashboard;