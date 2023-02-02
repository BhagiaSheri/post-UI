import Posts from "../../containers/Posts/Posts";
import NewPost from "../../components/NewPost/NewPost";
import {useState} from "react";

function Dashboard() {

    const [showPostFlag, setShowPostFlag] = useState(false)

    const [reloadPosts, setReloadPosts] = useState(0)

    const handleReloadPosts = () => {
        setReloadPosts(reloadPosts + 1);
    }

    const newPostOnClickHandler = () => {
        setShowPostFlag(!showPostFlag);
    }

    return (
        <>
            <div className="App-header">
                <h1>DASHBOARD</h1>
                <button onClick={newPostOnClickHandler}>{showPostFlag ? "HIDE" : "+ NEW POST"}</button>
                {showPostFlag ? <NewPost handleReloadPosts={handleReloadPosts}/> : null}
                <Posts reloadPosts={reloadPosts} handleReloadPosts={handleReloadPosts}/>
            </div>

        </>
    )

}

export default Dashboard;